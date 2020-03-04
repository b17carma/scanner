import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ScanList from "./ScanList";
import PartInfoCard from "./PartInfoCard";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function PartInfo(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <PartInfoCard equipmentId={props.match.params.equipmentId} componentId={props.match.params.componentId}/>
            <ScanList equipmentId={props.match.params.equipmentId} componentId={props.match.params.componentId}/>
        </Box>
    )
}