import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import {useHistory} from "react-router";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: theme.spacing(1)
    },
    button: {
        marginRight: theme.spacing(1)
    }
}));

export default function ScanResultOptions(props) {
    const classes = useStyles();
    const history = useHistory();

    function sendResults(status) {
        fetch(process.env.REACT_APP_API_LOCATION + '/scan', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                equipmentId: props.component.equipment._id,
                componentId: props.component._id,
                status: status
            })
        }).then(() => {
            history.push("/equipment/" + props.component.equipment._id)
        })
    }

    return (
        <Card className={classes.paper} variant="outlined">
            <CardContent>
                <Typography variant="body1" component="p" gutterBottom>
                    Is this component functioning properly?
                </Typography>
                <Button variant="outlined" color="primary" className={classes.button}
                        onClick={() => sendResults(true)}>Yes</Button>
                <Button variant="outlined" color="secondary" className={classes.button}
                        onClick={() => sendResults(false)}>No</Button>
                <Button variant="outlined" className={classes.button}
                        onClick={() => history.push("/equipment/" + props.component.equipment._id)}>Cancel</Button>
            </CardContent>
        </Card>
    )
}