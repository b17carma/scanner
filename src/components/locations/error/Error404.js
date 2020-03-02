import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(9)
    }
}));

export default function Error404() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            Page not found
        </Container>
    )
}