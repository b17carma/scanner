import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import ScanOverviewListSubItems from "./ScanOverviewListSubItems";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CircularProgress from "@material-ui/core/CircularProgress";
import {green} from "@material-ui/core/colors";
import CheckCircle from "@material-ui/icons/CheckCircle";
import {ErrorOutline} from "@material-ui/icons";

export default function ScanOverviewListItem(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const equipment = props.equipment;

    const ListIcon = function () {
        if (equipment.progress === 0) {
            return <ErrorOutline/>;
        } else if (equipment.progress === 100) {
            return <CheckCircle style={{color: green[500]}}/>
        } else {
            return <CircularProgress variant="static" value={equipment.progress} size={22}/>
        }
    };

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <ListIcon progress={equipment.progress}/>
                </ListItemIcon>
                <ListItemText primary={equipment.equipment.identifier}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ScanOverviewListSubItems components={equipment.components} location={props.location}/>
            </Collapse>
        </div>
    )
}
