import React from 'react';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import QrScanner from "../../qrreader/QrScanner";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 2),
        marginBottom: theme.spacing(1),
    },
}));

export default function Scanner() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <QrScanner/>
            </Paper>
        </div>
    );
}