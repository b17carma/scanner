import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";

export default function ScanResult(props) {

    const history = useHistory();

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(1),
            height: "100%",
            backgroundColor: theme.palette.background.paper
        },
        media: {
            height: 150
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
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setPart(data);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Card className={classes.paper} variant="outlined">
                <CardMedia
                    className={classes.media}
                    image={"/img/" + part.image}
                    title="Part Overview"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {part.identifier}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {part.description}
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <Typography variant="h5">
                    Is this component functioning properly?
                </Typography>
                <Button className={classes.button} variant="contained" onClick={() => sendResults(true)}>Yes</Button>
                <Button className={classes.button} variant="contained" onClick={() => sendResults(false)}>No</Button>
                <Button className={classes.button} variant="contained" onClick={() => history.push("/")}>Cancel</Button>
            </Card>
        </Box>
    )
}