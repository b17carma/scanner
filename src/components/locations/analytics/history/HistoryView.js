import React from 'react';
import DatePickerContainer from "../../../util/DatePickerContainer";
import Box from "@material-ui/core/Box";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MonthOverviewList from "../../home/MonthOverviewList";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function HistoryView() {
    const classes = useStyles();

    const startMonthDate = moment().startOf('month');
    const endMonthDate = moment().endOf('month');

    const [startDate, setStartDate] = React.useState(startMonthDate);
    const [endDate, setEndDate] = React.useState(endMonthDate);

    const handleStartDateChange = date => {
        if (date < endDate)
            setStartDate(date);
    };

    const handleEndDateChange = date => {
        if (date > startDate)
            setEndDate(date)
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Box className={classes.root}>
                <DatePickerContainer startDate={startDate} endDate={endDate}
                                     handleStartDateChange={handleStartDateChange}
                                     handleEndDateChange={handleEndDateChange}/>
                <List className={classes.list}>
                    <MonthOverviewList startDate={startDate} endDate={endDate}/>
                </List>

            </Box>
        </MuiPickersUtilsProvider>
    )
}