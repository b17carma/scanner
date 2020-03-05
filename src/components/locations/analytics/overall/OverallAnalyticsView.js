import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import OverallCalendarChart from "./OverallCalendarChart";
import OverallPieChart from "./OverallPieChart";
import ContainedOverlineText from "../../../util/ContainedOverlineText";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8)
    }
}));

export default function OverallAnalyticsView() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ContainedOverlineText text="Total Scans"/>
            <OverallPieChart/>
            <ContainedOverlineText text="Scan History"/>
            <OverallCalendarChart/>
        </Box>
    );
}