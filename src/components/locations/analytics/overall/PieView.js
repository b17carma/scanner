import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResponsivePie from "nivo/lib/components/charts/pie/ResponsivePie";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
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
        <Box className={classes.root}>
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
        </Box>
    )
}