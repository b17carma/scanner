import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ResponsiveCalendar} from "nivo";
import moment from "moment";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    paper: {
        height: 250,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        overflow: 'auto',
    },
    chart: {
        margin: theme.spacing(1)
    }
}));

export default function CalendarView(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <ResponsiveCalendar
                data={props.calendar}
                from={moment().startOf('month').format('YYYY-MM-DD')}
                to={moment().endOf('month').format('YYYY-MM-DD')}
                emptyColor="#eeeeee"
                width={1200}
                margin={{top: 45, right: 45, left: 45}}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"

            />
        </Paper>
    )
}