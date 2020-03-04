import React from 'react';
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import Box from "@material-ui/core/Box";
import DatePickerView from "./DatePickerView";
import WeekScanResponsiveLineChart from "./WeekScanResponsiveLineChart";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function EquipmentAnalytics(props) {
    const startMonthDate = moment().startOf('month');
    const endMonthDate = moment().endOf('month');

    const [startDate, setStartDate] = React.useState(startMonthDate);
    const [endDate, setEndDate] = React.useState(endMonthDate);

    const handleStartDateChange = date => {
        setStartDate(date);
    };

    const handleEndDateChange = date => {
        setEndDate(date)
    };

    const classes = useStyles();

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Box className={classes.root}>
                <DatePickerView startDate={startDate} endDate={endDate} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange}/>
                <WeekScanResponsiveLineChart equipmentId={props.match.params.equipmentId} startDate={startDate} endDate={endDate} />
            </Box>

        </MuiPickersUtilsProvider>
    )
}