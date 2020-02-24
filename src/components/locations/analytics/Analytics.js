import React from "react";
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

const data = [
    {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
];

export default function Analytics() {
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
                                <Pie dataKey="value" data={data} fill="#8884d8" label/>
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