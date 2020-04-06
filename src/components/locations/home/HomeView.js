import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ScanOverviewList from "./ScanOverviewList";
import ContainedOverlineText from "../../util/ContainedOverlineText";
import moment from "moment";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function HomeView(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ContainedOverlineText text="Today"/>
            <ScanOverviewList startDate={moment().startOf('day')} endDate={moment().endOf('day')} location={0}/>
            <ContainedOverlineText text="This week"/>
            <ScanOverviewList startDate={moment().startOf('isoWeek')} endDate={moment().endOf('isoWeek')} location={0}/>
        </Box>
    )
}
