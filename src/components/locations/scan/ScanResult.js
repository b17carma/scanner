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
import Divider from "@material-ui/core/Divider";

export default function ScanResult(props) {

    const history = useHistory();

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(1),
        },
        media: {
            height: 150
        },
        paper: {
            marginBottom: theme.spacing(1)
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

    const [part, setPart] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setPart(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

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
                        {part.equipment.identifier} - {part.identifier}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {part.description}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.paper} variant="outlined">
                <CardContent>
                    <Typography variant="body1" component="p" gutterBottom>
                        Is this component functioning properly?
                    </Typography>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={() => sendResults(true)}>Yes</Button>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={() => sendResults(false)}>No</Button>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={() => history.push("/")}>Cancel</Button>
                </CardContent>
            </Card>
        </Box>
    )
}