import ContainedOverlineText from "../../../util/ContainedOverlineText";
import Box from "@material-ui/core/Box";
import ResponsiveLine from "nivo/lib/components/charts/line/ResponsiveLine";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    box: {
        height: 430
    }
}));

export default function WeekScanResponsiveLineChart(props) {
    const [chartData, setChartData] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        let unmounted = false;

        async function fetchChartData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/scans/" + props.equipmentId + "/" + moment(props.startDate).format() + "/" + moment(props.endDate).format());
            const data = await res.json();

            if (unmounted)
                return;

            setChartData(data);
            setLoading(false);
        }

        fetchChartData();

        console.log("Fetched chart data");
        return () => {unmounted = true}
    }, [props.equipmentId, props.startDate, props.endDate]);

    const classes = useStyles();

    if (loading) {
        return <div/> //TODO
    }

    return (
        <div>
            <ContainedOverlineText text="Scans by week"/>
            <Box className={classes.box}>
                <ResponsiveLine
                    data={chartData}
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
        </div>
    )
}