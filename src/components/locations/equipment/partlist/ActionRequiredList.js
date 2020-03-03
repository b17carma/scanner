import ContainedOverlineText from "../../../util/ContainedOverlineText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AlarmIcon from "@material-ui/icons/Alarm";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function ActionRequiredList(props) {
    const classes = useStyles();

    if (props.requiredParts.length === 0)
        return null;

    return (
        <div>
            <ContainedOverlineText text="Action Required"/>
            <List className={classes.root}>
                {props.requiredParts.map((part, i) => (
                    <ListItem key={i} button component={Link}
                              to={"/equipment/" + props.match.params.equipmentId + "/" + part._id}>
                        <ListItemIcon>
                            <AlarmIcon/>
                        </ListItemIcon>
                        <ListItemText id={i} primary={part.identifier}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}