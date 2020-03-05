import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import ScanResultSteps from "./ScanResultSteps";
import ScanResultOptions from "./ScanResultOptions";
import ScanResultEquipment from "./ScanResultEquipment";

export default function ScanResultView(props) {

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(1),
            marginBottom: theme.spacing(7)
        }
    }));

    const [component, setComponent] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchComponentData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.match.params.equipmentId + "/" + props.match.params.componentId);
            const component = await res.json();
            setComponent(component);
            setLoading(false);
        }

        fetchComponentData();

        console.log("Fetched component data");
    }, [props.match.params.equipmentId, props.match.params.componentId]);

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

    return (
        <Box className={classes.root}>
            <ScanResultEquipment component={component}/>
            <ScanResultSteps component={component}/>
            <ScanResultOptions component={component}/>
        </Box>
    )
}