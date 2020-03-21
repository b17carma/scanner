import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ScanOverviewList from "./ScanOverviewList";
import ContainedOverlineText from "../../util/ContainedOverlineText";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function HomeView(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ContainedOverlineText text="Weekly Overview"/>
            <List className={classes.list}>
                <ScanOverviewList startDate={moment().startOf('isoWeek')} endDate={moment().endOf('isoWeek')} location={0}/>
            </List>
        </Box>
    )
}
