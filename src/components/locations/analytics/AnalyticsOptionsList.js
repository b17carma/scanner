import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Assessment as AssessmentIcon, Build as BuildIcon} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function AnalyticsOptionsList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem button component={Link} to={"analytics/overall/"}>
                <ListItemIcon>
                    <AssessmentIcon/>
                </ListItemIcon>
                <ListItemText id="1" primary="Overall"/>
            </ListItem>
            <ListItem button component={Link} to={"analytics/equipment/"}>
                <ListItemIcon>
                    <BuildIcon/>
                </ListItemIcon>
                <ListItemText id="2" primary="Equipment"/>
            </ListItem>
            <ListItem button component={Link} to={"analytics/history/"}>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText id="3" primary="Scan History"/>
            </ListItem>
        </List>
    )
}