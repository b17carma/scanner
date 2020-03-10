import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Scanner as ScannerIcon} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    list: {
        background: theme.palette.background.paper
    }
}));

export default function ComponentActions() {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            <ListItem button component={Link} to="/scan">
                <ListItemIcon>
                    <ScannerIcon/>
                </ListItemIcon>
                <ListItemText primary="Scan Now"/>
            </ListItem>
        </List>
    )
}