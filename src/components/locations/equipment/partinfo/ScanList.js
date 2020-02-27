import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import ListItemText from "@material-ui/core/ListItemText";
import {format} from "date-fns";
import React from "react";

const ScanList = (props) => {
    return (
        props.scans.slice(0, 5).map((scan, i) => (
            <ListItem key={i}>
                <ListItemIcon>
                    {scan.status ? <CheckIcon style={{color: green[500]}}/> :
                        <WarningIcon style={{color: red[500]}}/>}
                </ListItemIcon>
                <ListItemText id={i} primary={format(new Date(scan.time), 'dd/MM/yyyy HH:mm:ss')}/>
            </ListItem>
        ))
    )
};

export default ScanList;