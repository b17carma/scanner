import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import moment from "moment";
import ContainedOverlineText from "../../../util/ContainedOverlineText";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const ScanList = (props) => {
    const classes = useStyles();

    return (
        <div>
            <ContainedOverlineText text="Recent scans"/>
            <List className={classes.list}>
                {props.scans.map((scan, i) => (
                    <ListItem key={i}>
                        <ListItemIcon>
                            {scan.status ? <CheckIcon style={{color: green[500]}}/> :
                                <WarningIcon style={{color: red[500]}}/>}
                        </ListItemIcon>
                        <ListItemText id={i} primary={moment(scan.time).format('DD/MM/YYYY HH:mm:ss')}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
};

export default ScanList;