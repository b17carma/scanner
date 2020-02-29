import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import ContainedOverlineText from "../../../util/ContainedOverlineText";
import Box from "@material-ui/core/Box";
import ResponsiveLine from "nivo/lib/components/charts/line/ResponsiveLine";

const useStyles = makeStyles(theme => ({
    button: {
        marginBottom: theme.spacing(1)
    },
    box: {
        height: 400
    }
}));

export default function EquipmentAnalytics(props) {
    const startMonthDate = moment().startOf('month');
    const endMonthDate = moment().endOf('month');

    const [startDate, setStartDate] = React.useState(startMonthDate);
    const [endDate, setEndDate] = React.useState(endMonthDate);

    const [chartData, setChartData] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    async function fetchChartData() {
        const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/scans/" + props.match.params.equipmentId + "/" + moment(startDate).format() + "/" + moment(endDate).format());
        const data = await res.json();

        setChartData(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchChartData();

        console.log("Fetched chart data");
    }, [props.match.params.equipmentId, startDate, endDate]);

    const handleDateChange = date => {
        console.log(date)
    };

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Container>
                <div>
                    <KeyboardDatePicker
                        margin="normal"
                        id="start-date-picker"
                        label="Start date"
                        value={startDate}
                        format="MM/dd/yyyy"
                        onChange={handleDateChange}
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
                        format="MM/dd/yyyy"
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </div>
                <Button className={classes.button} variant="outlined" color="primary">Search</Button>
                <Divider/>
            </Container>
            <ContainedOverlineText text="Faulty scans by week"/>
            <Box className={classes.box}>
                <ResponsiveLine
                    data={[chartData]}
                    margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                />
            </Box>
        </MuiPickersUtilsProvider>
    )
}