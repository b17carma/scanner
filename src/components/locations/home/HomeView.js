import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8)
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    alert: {
        marginBottom: theme.spacing(1)
    }
}));

export default function HomeView() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Alert severity="warning" className={classes.alert}>
                <AlertTitle>Notice</AlertTitle>
                Not all equipment has been scanned yet today
            </Alert>
        </Container>
    )
}