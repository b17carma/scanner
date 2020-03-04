import React from "react";
import {Box} from "@material-ui/core";
import EquipmentInfoPaper from "./EquipmentInfoPaper";
import ActionRequiredList from "./ActionRequiredList";
import PartListItems from "./PartListItems";

export default function PartList(props) {
    return (
        <Box>
            <EquipmentInfoPaper equipmentId={props.match.params.equipmentId}/>
            <ActionRequiredList equipmentId={props.match.params.equipmentId}/>
            <PartListItems equipmentId={props.match.params.equipmentId}/>
        </Box>
    )
}