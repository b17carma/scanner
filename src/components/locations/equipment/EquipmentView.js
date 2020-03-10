import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import EquipmentList from "./EquipmentList";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8),
        padding: theme.spacing(1)
    }
}));

export default function EquipmentView(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <EquipmentList location={props.location}/>
        </Box>
    )
}