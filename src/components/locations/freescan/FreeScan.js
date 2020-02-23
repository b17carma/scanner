import React from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import QrScanner from "../../qrreader/QrScanner";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

export default function FreeScan() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <QrScanner/>
            </Paper>
        </Container>
    );
}