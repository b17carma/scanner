import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import ContainedOverlineText from "../../../util/ContainedOverlineText";
import Box from "@material-ui/core/Box";
import ResponsiveLine from "nivo/lib/components/charts/line/ResponsiveLine";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    box: {
        height: 430
    }
}));

export default function EquipmentAnalytics(props) {
    const startMonthDate = moment().startOf('month');
    const endMonthDate = moment().endOf('month');

    const [startDate, setStartDate] = React.useState(startMonthDate);
    const [endDate, setEndDate] = React.useState(endMonthDate);

    const [chartData, setChartData] = React.useState({});
    const [loading, setLoading] = React.useState(true);



    useEffect(() => {
        async function fetchChartData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/scans/" + props.match.params.equipmentId + "/" + moment(startDate).format() + "/" + moment(endDate).format());
            const data = await res.json();

            setChartData(data);
            setLoading(false);
        }

        fetchChartData();

        console.log("Fetched chart data");
    }, [props.match.params.equipmentId, startDate, endDate]);

    const handleStartDateChange = date => {
        setStartDate(date);
    };

    const handleEndDateChange = date => {
        setEndDate(date)
    };

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Box className={classes.root}>
                <Container>
                    <div>
                        <KeyboardDatePicker
                            margin="normal"
                            id="start-date-picker"
                            label="Start date"
                            value={startDate}
                            format="MM/DD/YYYY"
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                    <div>
                        <KeyboardDatePicker
                            margin="normal"
                            id="end-date-picker"
                            label="End date"
                            value={endDate}
                            format="MM/DD/YYYY"
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                    <Divider/>
                </Container>
                <ContainedOverlineText text="Faulty scans by week"/>
                <Box className={classes.box}>
                    <ResponsiveLine
                        data={[chartData]}
                        margin={{ top: 5, right: 30, bottom: 50, left: 50 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'week',
                            legendOffset: 36,
                            legendPosition: 'center'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'faults',
                            legendOffset: -30,
                            legendPosition: 'center'
                        }}
                    />
                </Box>
            </Box>

        </MuiPickersUtilsProvider>
    )
}