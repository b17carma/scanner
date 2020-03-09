import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HistoryIcon from "@material-ui/icons/History";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HomeOverviewListItemsSkeleton from "../../skeleton/HomeOverviewListItemsSkeleton";

const useStyles = makeStyles(theme => ({
    alert: {
        marginBottom: theme.spacing(1)
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    }
}));

export default function HomeOverviewList() {
    const classes = useStyles();

    const [overview, setOverview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unmounted = false;

        async function fetchOverviewData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/overview");

            res.json().then((data) => {
                if (unmounted)
                    return;

                setOverview(data);
                setLoading(false)
            }).catch(console.log)
        }

        fetchOverviewData();

        console.log("Fetched overview data");
        return () => {unmounted = true}
    }, []);

    if (loading) {
        return (
            <HomeOverviewListItemsSkeleton/>
        );
    }

    return (
        overview.map((intervalData, index) => (
            <li key={`overview-${index}`} className={classes.listSection}>
                <ul className={classes.ul}>
                    <ListSubheader>{intervalData.date}</ListSubheader>
                    {intervalData.data.map((component, i) => (
                        <ListItem button key={`item-${i}`} component={Link} to={"/equipment/" + component.equipment._id + "/" + component._id}>
                            <ListItemIcon>
                                {!component.hasOwnProperty('scanStatus') ? <HistoryIcon/> : component.scanStatus ? <CheckIcon style={{color: green[500]}}/> : <WarningIcon style={{color: red[500]}}/>}
                            </ListItemIcon>
                            <ListItemText primary={`${component.equipment.identifier} - ${component.identifier}`}/>
                        </ListItem>
                    ))}
                </ul>
            </li>
        ))
    )
}