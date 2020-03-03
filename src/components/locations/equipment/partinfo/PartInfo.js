import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ScanList from "./ScanList";
import PartInfoCard from "./PartInfoCard";
import PartInfoSkeleton from "./PartInfoSkeleton";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    media: {
        height: 200
    },
    paper: {
        marginBottom: theme.spacing(1)
    }
}));

export default function PartInfo(props) {
    const [part, setPart] = React.useState([]);
    const [scans, setScans] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    const scanLimit = 5;

    useEffect(() => {
        async function fetchPartData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.match.params.equipmentId + "/" + props.match.params.componentId);
            const data = await res.json();
            setPart(data);
            setLoading(false);
        }

        async function fetchScanData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/scan/" + props.match.params.equipmentId + "/" + props.match.params.componentId + "/" + scanLimit);
            const data = await res.json();
            setScans(data);
        }

        fetchPartData();
        fetchScanData();

        console.log("Fetched part & scan data");
    }, [props.match.params.equipmentId, props.match.params.componentId]);

    const classes = useStyles();

    if (loading) {
        return (
           <PartInfoSkeleton/>
        )
    } else {
        return (
            <Box className={classes.root}>
                <PartInfoCard part={part}/>
                <ScanList scans={scans}/>
            </Box>
        )
    }
}