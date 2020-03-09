import {Box, Grid} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default function ComponentFrequency(props) {
    const classes = useStyles();

    function translate(frequencyType) {
        return frequencyType === 0 ? 'day' : frequencyType === 1 ? 'week' : frequencyType === 2 ? 'month' : 'year';
    }

    function translateDays(days) {
        let text = "";

        if (days.length === 0)
            return "Any week day";

        days.forEach(function(day, i) {
            if (day === 1)
                text += 'Mon';
            else if (day === 2)
                text += 'Tue';
            else if (day === 3)
                text += 'Wed';
            else if (day === 4)
                text += 'Thu';
            else if (day === 5)
                text += 'Fri';
            else if (day === 6)
                text += 'Sat';
            else if (day === 7)
                text += 'Sun';

            if (days.length !== 1 && i !== days.length - 1)
                text += ", "
        });

        return text;
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={4}>
                    <Paper variant="outlined" className={classes.paper}>
                        {props.component.frequency} time(s)
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper variant="outlined" className={classes.paper}>
                        Each {translate(props.component.frequencyType)}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper variant="outlined" className={classes.paper}>
                        {translateDays(props.component.frequencyDays)}
                    </Paper>
                </Grid>
            </Grid>
        </Box>

    )
}