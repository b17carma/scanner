import React from 'react';
import {Container, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(9)
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    button: {
        marginBottom: theme.spacing(2)
    },
    box: {
        marginBottom: theme.spacing(2)
    }
}));

export default function SimulationView() {
    const [start, setStart] = React.useState(0);
    const [areaText, setAreaText] = React.useState("");
    const [end, setEnd] = React.useState(0);

    function downloadFile() {
        const element = document.createElement("a");
        const file = new Blob([areaText], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "results.txt";
        document.body.appendChild(element);
        element.click();
    }

    async function simulatePosts(equipmentId, componentId, status) {
        setEnd(0);
        setStart(performance.now());

        let lastTime = 0;
        let newText = "";

        for (let i = 0; i < 1000; i++) {
            const response = await fetch(process.env.REACT_APP_API_LOCATION + '/scan', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    equipmentId: equipmentId,
                    componentId: componentId,
                    status: status
                })
            });
            await response.json();

            let timeNow = performance.now();

            if (lastTime !== 0) {
                newText += (timeNow - lastTime) + "\n";
            }

            lastTime = timeNow;
        }
        setAreaText(newText);
        setEnd(performance.now());
    }

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="body1" gutterBottom>
                    Start: {start}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    End: {end}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Diff: {end === 0 ? null : end - start}
                </Typography>
            </Paper>
            <Button className={classes.box} variant="contained"
                    onClick={() => simulatePosts('5e53f1c36c7df42438366bde', '5e53f1c36c7df42438366be0', true)}>Start
                Simulation</Button>
            <TextField className={classes.box} multiline label="Results" variant="outlined" rows={10} fullWidth value={areaText}/>
            <Button variant="contained" onClick={() => downloadFile()}>Save results</Button>
        </Container>
    )
}
