import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import BlockIcon from "@material-ui/icons/Block";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    nestedItem: {
        paddingLeft: theme.spacing(5),
    },
}));

export default function ScanOverviewListSubItems(props) {
    function location() {
        if (props.location === 0)
            return "/home/";
        else if (props.location === 1)
            return "/analytics/history/";
        else
            return "/home/"
    }

    const ListIcon = (props) => {
        if (!props.component.hasOwnProperty('scanStatus')) {
            return <BlockIcon/>;
        } else if (props.component.scanStatus) {
            return <CheckIcon style={{color: green[500]}}/>
        } else {
            return <WarningIcon style={{color: red[500]}}/>
        }
    };

    const components = props.components;
    const classes = useStyles();

    return (
        components.map((component, i) => (
                <ListItem button key={`item-${i}`} component={Link} to={location() + component.equipment._id + "/" + component._id} className={classes.nestedItem}>
                    <ListItemIcon>
                        <ListIcon component={component}/>
                    </ListItemIcon>
                    <ListItemText primary={component.identifier}/>
                </ListItem>
            )
        ));
}
