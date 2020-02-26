import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import {Pie, PieChart} from "recharts";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import CalendarHeatmap from "react-calendar-heatmap";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8)
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    alert: {
        marginBottom: theme.spacing(1)
    },
    heatmap: {
        height: 250
    }
}));

const data = [
    {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
];

export default function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Alert severity="warning" className={classes.alert}>
                <AlertTitle>Notice</AlertTitle>
                Not all equipment has been scanned yet today
            </Alert>
            <Paper className={classes.paper}>
                <div style={{width: '100%', height: 300}}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="value" data={data} fill="#8884d8" label/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Paper>
        </Container>
    )
}