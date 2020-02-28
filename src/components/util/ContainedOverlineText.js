import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    textContainer: {
        marginTop: theme.spacing(1)
    },
}));

export default function ContainedOverlineText(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes}>
            <Typography variant="overline" display="block">
               {props.text}
            </Typography>
        </Container>
    )
}