import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import ScanResultSteps from "./ScanResultSteps";
import ScanResultOptions from "./ScanResultOptions";
import ScanResultEquipment from "./ScanResultEquipment";

export default function ScanResult(props) {

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(1),
            marginBottom: theme.spacing(7)
        }
    }));

    const [part, setPart] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.match.params.equipmentId + "/" + props.match.params.componentId);
            const data = await res.json();
            setPart(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.componentId]);

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

    return (
        <Box className={classes.root}>
            <ScanResultEquipment part={part}/>
            <ScanResultSteps part={part}/>
            <ScanResultOptions part={part}/>
        </Box>
    )
}