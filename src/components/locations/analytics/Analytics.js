import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import ResponsivePie from "nivo/lib/components/charts/pie/ResponsivePie";

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(8)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        height: 300,
    },
    chart: {
        margin: theme.spacing(1)
    }
}));

export default function Analytics(props) {
    const [overall, setOverall] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchScanData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/stats");
            const data = await res.json();
            setOverall(data);
            setLoading(false);
        }

        fetchScanData();

        console.log("Fetched scan data");
    }, []);

    const data = [
        {
            id: 'Normal',
            label: 'Normal',
            value: overall.successCount,
            color: 'hsl(121,74%,49%)'
        },
        {
            id: 'Faults',
            label: 'Faults',
            value: overall.failureCount,
            color: 'hsl(359,72%,50%)'
        }
    ];

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <ResponsivePie
                    data={data}
                    animate={true}
                    margin={{
                        "top": 20,
                        "right": 20,
                        "bottom": 20,
                        "left": 20
                    }}
                />
            </Paper>
        </Container>
    );
}