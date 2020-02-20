import React from 'react';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Container>
            <Paper className={classes.root}>
                <p>Hello</p>
            </Paper>
            <Paper className={classes.root}>
                <p>Hello</p>
            </Paper>
            <Paper className={classes.root}>
                <p>Hello</p>
            </Paper>
        </Container>
    );
}