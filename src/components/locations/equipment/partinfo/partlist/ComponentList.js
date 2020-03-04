import React from "react";
import {Box} from "@material-ui/core";
import EquipmentInfoCard from "./EquipmentInfoCard";
import ActionRequiredList from "./ActionRequiredList";
import ComponentListItems from "./ComponentListItems";

export default function ComponentList(props) {
    return (
        <Box>
            <EquipmentInfoCard equipmentId={props.match.params.equipmentId}/>
            <ActionRequiredList equipmentId={props.match.params.equipmentId}/>
            <ComponentListItems equipmentId={props.match.params.equipmentId}/>
        </Box>
    )
}