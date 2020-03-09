import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ComponentScanHistoryList from "./ComponentScanHistoryList";
import ComponentInformationCard from "./ComponentInformationCard";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function ComponentInformationView(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ComponentInformationCard equipmentId={props.match.params.equipmentId} componentId={props.match.params.componentId}/>
            <ComponentScanHistoryList equipmentId={props.match.params.equipmentId} componentId={props.match.params.componentId}/>
        </Box>
    )
}