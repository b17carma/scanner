import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResponsivePie from "nivo/lib/components/charts/pie/ResponsivePie";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: 300,
        marginBottom: theme.spacing(1),
    }
}));

export default function OverallPieChart() {
    const [overallData, setOverallData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const classes = useStyles();

    useEffect(() => {
        let unmounted = false;

        async function fetchStatData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/stats");
            const data = await res.json();

            if (unmounted)
                return;

            setOverallData(data);
            setLoading(false);
        }
        fetchStatData();

        console.log("Fetched stat data");
        return () => {unmounted = true}
    }, []);

    if (loading) {
        return <div/> //TODO
    }

    return (
        <Box className={classes.root}>
            <ResponsivePie
                data={overallData}
                animate={true}
                colorBy={d => d.color}
                margin={{
                    "top": 45,
                    "right": 45,
                    "bottom": 45,
                    "left": 45
                }}
            />
        </Box>
    )
}