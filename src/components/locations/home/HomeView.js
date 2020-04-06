import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ScanOverviewList from "./ScanOverviewList";
import ContainedOverlineText from "../../util/ContainedOverlineText";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function HomeView() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ContainedOverlineText text="This week"/>
            <ScanOverviewList startDate={moment().startOf('isoWeek')} endDate={moment().endOf('isoWeek')} location={0}/>
        </Box>
    )
}
