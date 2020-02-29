import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";

export default function ScanResult(props) {

    const history = useHistory();

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(1),
            height: "100%",
            backgroundColor: theme.palette.background.paper
        },
        button: {
            marginRight: theme.spacing(1)
        }
    }));

    function sendResults(status) {
        fetch(process.env.REACT_APP_API_LOCATION + '/scan', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                equipmentId: props.match.params.equipmentId,
                partId: props.match.params.partId,
                status: status
            })
        }).then(() => {
            history.push("/equipment/" + props.match.params.equipmentId)
        })
    }

    const [part, setPart] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setPart(data);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img src={"/img/" + part.image} alt="Part Preview" height="200px" width="100%"/>
            <Box>
                <Typography variant="h5">
                    Is this component functioning normally?
                </Typography>
                <Button className={classes.button} variant="contained" onClick={() => sendResults(true)}>Yes</Button>
                <Button className={classes.button} variant="contained" onClick={() => sendResults(false)}>No</Button>
                <Button className={classes.button} variant="contained" onClick={() => history.push("/")}>Cancel</Button>
            </Box>
        </Box>
    )
}