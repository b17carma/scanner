import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Timer} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function DebugOptionsList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem button component={Link} to={"analytics/simulation/"}>
                <ListItemIcon>
                    <Timer/>
                </ListItemIcon>
                <ListItemText id="1" primary="Scan Simulation"/>
            </ListItem>
        </List>
    )
}
