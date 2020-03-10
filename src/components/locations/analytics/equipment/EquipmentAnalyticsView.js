import React from 'react';
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import Box from "@material-ui/core/Box";
import DatePickerContainer from "../../../util/DatePickerContainer";
import WeekScanResponsiveLineChart from "./WeekScanResponsiveLineChart";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function EquipmentAnalyticsView(props) {
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

    const classes = useStyles();

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Box className={classes.root}>
                <DatePickerContainer startDate={startDate} endDate={endDate}
                                     handleStartDateChange={handleStartDateChange}
                                     handleEndDateChange={handleEndDateChange}/>
                <WeekScanResponsiveLineChart equipmentId={props.match.params.equipmentId} startDate={startDate}
                                             endDate={endDate}/>
            </Box>

        </MuiPickersUtilsProvider>
    )
}