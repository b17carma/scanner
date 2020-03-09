import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import {CardActions} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: theme.spacing(1)
    },
    button: {
        marginRight: theme.spacing(1)
    }
}));

export default function ComponentActions() {
    const classes = useStyles();

    return (
        <Card className={classes.paper} variant="outlined">
            <CardActions>
                <Button variant="outlined" color="primary" className={classes.button} component={Link} to="/scan">Scan Now</Button>
            </CardActions>
        </Card>
    )
}