import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Assignment} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import ScanOverviewListSubItems from "./ScanOverviewListSubItems";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function ScanOverviewListItem(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const equipment = props.equipment;
    const index = props.index;

    return (
        <div>
            <ListItem button id={"listitem_" + equipment.equipment._id + "_" + index} onClick={handleClick}>
                <ListItemIcon>
                    <Assignment/>
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
