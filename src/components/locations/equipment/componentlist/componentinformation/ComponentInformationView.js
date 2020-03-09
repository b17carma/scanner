import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ComponentScanHistoryList from "./ComponentScanHistoryList";
import ComponentInformationCard from "./ComponentInformationCard";
import ComponentFrequency from "./ComponentFrequency";
import ComponentActions from "./ComponentActions";
import ContainedOverlineText from "../../../../util/ContainedOverlineText";
import ComponentInformationSkeleton from "../../../../skeleton/ComponentInformationSkeleton";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    }
}));

export default function ComponentInformationView(props) {
    const classes = useStyles();

    const [component, setComponent] = React.useState([]);
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

    if (loading) {
        return <ComponentInformationSkeleton/>
    }

    return (
        <Box className={classes.root}>
            <ComponentInformationCard component={component}/>
            <ContainedOverlineText text="Scan Frequency"/>
            <ComponentFrequency component={component}/>
            <ContainedOverlineText text="Actions"/>
            <ComponentActions/>
            <ComponentScanHistoryList equipmentId={props.match.params.equipmentId} componentId={props.match.params.componentId}/>
        </Box>
    )
}