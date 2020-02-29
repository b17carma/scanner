import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import {green, red} from "@material-ui/core/colors";
import CalendarView from "./CalendarView";
import PieView from "./PieView";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8)
    }
}));


export default function OverallAnalytics(props) {
    const [overall, setOverall] = React.useState([]);
    const [calendar, setCalendar] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchStatData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/stats");
            const data = await res.json();
            setOverall(data);
            setLoading(false);
        }

        async function fetchCalendarData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/calendar");
            const data = await res.json();
            setCalendar(data);
            console.log(data)
        }

        fetchStatData();
        fetchCalendarData();

        console.log("Fetched scan data");
    }, []);

    const data = [
        {
            id: 'Normal',
            label: 'Normal',
            value: overall.successCount,
            color: green[500]
        },
        {
            id: 'Faults',
            label: 'Faults',
            value: overall.failureCount,
            color: red[500]
        }
    ];

    const classes = useStyles();

    if (loading || calendar.length === 0)
        return (
            <div/>
        );

    return (
        <Container className={classes.root}>
            <PieView data={data}/>
            <CalendarView calendar={calendar}/>
        </Container>
    );
}