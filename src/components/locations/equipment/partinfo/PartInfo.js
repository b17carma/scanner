import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ScanList from "./ScanList";
import PartInfoCard from "./PartInfoCard";
import PartInfoSkeleton from "./PartInfoSkeleton";
import ContainedOverlineText from "../../../util/ContainedOverlineText";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    media: {
        height: "200px"
    },
    paper: {
        marginBottom: theme.spacing(1)
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function PartInfo(props) {
    const [part, setPart] = React.useState([]);
    const [scans, setScans] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchPartData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setPart(data);
            setLoading(false);
        }

        async function fetchScanData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/scan/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setScans(data);
        }

        fetchPartData();
        fetchScanData();

        console.log("Fetched part & scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    if (loading) {
        return (
           <PartInfoSkeleton/>
        )
    } else {
        return (
            <Box className={classes.root}>
                <PartInfoCard part={part}/>
                <ContainedOverlineText text="Recent scans"/>
                <List className={classes.list}>
                    <ScanList scans={scans}/>
                </List>
            </Box>
        )
    }
}