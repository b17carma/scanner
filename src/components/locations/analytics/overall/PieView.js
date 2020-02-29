import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import ResponsivePie from "nivo/lib/components/charts/pie/ResponsivePie";

const useStyles = makeStyles(theme => ({
    paper: {
        height: 300,
        marginBottom: theme.spacing(1),
    },
    chart: {
        margin: theme.spacing(1)
    }
}));

export default function PieView(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <ResponsivePie
                data={props.data}
                animate={true}
                colorBy={d => d.color}
                margin={{
                    "top": 45,
                    "right": 45,
                    "bottom": 45,
                    "left": 45
                }}
            />
        </Paper>
    )
}