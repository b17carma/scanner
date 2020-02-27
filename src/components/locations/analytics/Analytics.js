import React, {useEffect} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import {ExpandMore as ExpandMoreIcon} from "@material-ui/icons"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    PieChart, Pie, Sector, Cell, AreaChart,
} from 'recharts';
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";

const useStyles = makeStyles(theme => ({
    root: {},
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Analytics(props) {
    const [scans, setScans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchScanData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/scans");
            const data = await res.json();
            setScans(data);
            setLoading(false);
        }
        fetchScanData();

        console.log("Fetched scan data");
    }, []);

    const chartData = {

    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>24/02/2020</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div style={{width: '100%', height: 300}}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie dataKey="value" data={scans} fill="#8884d8" label/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>23/02/2020</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}