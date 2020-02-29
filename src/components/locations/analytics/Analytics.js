import React from 'react';
import ContainedOverlineText from "../../util/ContainedOverlineText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import {Box} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Assessment as AssessmentIcon, Build as BuildIcon} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function Analytics() {
    const classes = useStyles();

    return (
        <Box>
            <ContainedOverlineText text="Options"/>
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
            </List>
        </Box>
    )
}