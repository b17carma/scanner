import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import BlockIcon from '@material-ui/icons/Block';
import React from "react";

function scanStatus(component) {
    return component.lastScan === undefined ? 2 : component.lastScan.status ? 0 : 1;
}

const ComponentIcon = (props) => {
    const status = scanStatus(props.component);

    return (
        <ListItemIcon>
            {status === 0 ? <CheckIcon style={{color: green[500]}}/> : status === 1 ? <WarningIcon style={{color: red[500]}}/> : <BlockIcon/>}
        </ListItemIcon>
    )
};

export default ComponentIcon;