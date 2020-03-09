import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useEffect} from "react";
import moment from "moment";
import ContainedOverlineText from "../../../../util/ContainedOverlineText";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const ComponentScanHistoryList = (props) => {
    const [scans, setScans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const scanLimit = 5;

    useEffect(() => {
        async function fetchScanData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/scan/" + props.equipmentId + "/" + props.componentId + "/" + scanLimit);
            const data = await res.json();
            setScans(data);
            setLoading(false);
        }

        fetchScanData();

        console.log("Fetched scan data");
    }, [props.equipmentId, props.componentId]);

    const classes = useStyles();

    if (loading) {
        return <div/> //TODO
    }

    if (scans.length === 0)
        return null;

    return (
        <div>
            <ContainedOverlineText text="Recent scans"/>
            <List className={classes.list}>
                {scans.map((scan, i) => (
                    <ListItem key={i}>
                        <ListItemIcon>
                            {scan.status ? <CheckIcon style={{color: green[500]}}/> :
                                <WarningIcon style={{color: red[500]}}/>}
                        </ListItemIcon>
                        <ListItemText id={i} primary={moment(scan.time).format('DD/MM/YYYY HH:mm:ss')}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
};

export default ComponentScanHistoryList;