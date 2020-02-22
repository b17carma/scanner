import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Assessment as AssessmentIcon, Scanner as ScannerIcon} from "@material-ui/icons";
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
                {['Scanner', 'Analytics'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={index % 2 === 0 ? "/scan" : "analytics"}>
                        <ListItemIcon>{index % 2 === 0 ? <ScannerIcon /> : <AssessmentIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
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