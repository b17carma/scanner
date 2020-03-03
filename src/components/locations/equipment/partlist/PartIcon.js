import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import HistoryIcon from "@material-ui/icons/History";
import React from "react";

function scanStatus(part) {
    return part.lastScan === undefined ? 2 : part.lastScan.status ? 0 : 1;
}

const PartIcon = (props) => {
    const status = scanStatus(props.part);

    return (
        <ListItemIcon>
            {status === 0 ? <CheckIcon style={{color: green[500]}}/> : status === 1 ? <WarningIcon style={{color: red[500]}}/> : <HistoryIcon/>}
        </ListItemIcon>
    )
};

export default PartIcon;