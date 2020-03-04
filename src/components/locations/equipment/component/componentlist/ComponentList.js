import React from "react";
import {Box} from "@material-ui/core";
import EquipmentInfoCard from "./EquipmentInfoCard";
import ActionRequiredList from "./ActionRequiredList";
import ComponentListItems from "./ComponentListItems";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function ComponentList(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <EquipmentInfoCard equipmentId={props.match.params.equipmentId}/>
            <ActionRequiredList equipmentId={props.match.params.equipmentId}/>
            <ComponentListItems equipmentId={props.match.params.equipmentId}/>
        </Box>
    )
}