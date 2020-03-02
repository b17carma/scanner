import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
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
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setPart(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    if (loading)
        return (
            <div/>
        );

    return (
        <Box className={classes.root}>
            <ScanResultEquipment part={part}/>
            <ScanResultSteps classes={classes} part={part}/>
            <ScanResultOptions/>
        </Box>
    )
}