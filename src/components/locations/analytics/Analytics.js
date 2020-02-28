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
import {green, red} from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(8)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
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

    const COLORS = [green[500], red[500]];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index,}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = [
        {name: 'Normal Recorded', value: overall.successCount},
        {name: 'Faults Recorded', value: overall.failureCount},
    ];

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Paper>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {
                                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Paper>
        </Container>
    );
}