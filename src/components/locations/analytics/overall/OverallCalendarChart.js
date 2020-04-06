import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ResponsiveCalendar} from "nivo";
import moment from "moment";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: 250,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        overflow: 'auto',
    },
    chart: {
        margin: theme.spacing(1)
    }
}));

export default function OverallCalendarChart() {
    const classes = useStyles();
    const [calendar, setCalendar] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        let unmounted = false;

        async function fetchCalendarData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/calendar");
            const data = await res.json();

            if (unmounted)
                return;

            setCalendar(data);
            setLoading(false);
            console.log(data)
        }

        fetchCalendarData();

        console.log("Fetched calendar data");
        return () => {unmounted = true}
    }, []);

    if (loading || calendar.length === 0) {
        return <div/> //TODO
    }

    return (
        <Box className={classes.root}>
            <ResponsiveCalendar
                data={calendar}
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
        </Box>
    )
}
