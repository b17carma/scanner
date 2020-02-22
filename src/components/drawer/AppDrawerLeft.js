import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Assessment as AssessmentIcon, Scanner as ScannerIcon, House as HouseIcon} from "@material-ui/icons";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    fullList: {
        width: 'auto',
    },
});

export default function AppDrawerLeft(props) {

    const classes = useStyles();

    const open = props.open;
    const toggleDrawer = props.toggleDrawer;

    const fullList = (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button key="Home" component={Link} to="/">
                    <ListItemIcon><HouseIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="Scanner" component={Link} to="/scan">
                    <ListItemIcon><ScannerIcon /></ListItemIcon>
                    <ListItemText primary="Scanner" />
                </ListItem>
                <ListItem button key="Analytics" component={Link} to="/analytics">
                    <ListItemIcon><AssessmentIcon /></ListItemIcon>
                    <ListItemText primary="Analytics" />
                </ListItem>

            </List>
            <Divider />
        </div>
    );

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {fullList}
        </Drawer>
    )
}