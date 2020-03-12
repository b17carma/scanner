import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ScanOverviewListItemsSkeleton from "../../skeleton/ScanOverviewListItemsSkeleton";
import moment from "moment";

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

export default function ScanOverviewList(props) {
    const classes = useStyles();

    const [overview, setOverview] = useState([]);
    const [loading, setLoading] = useState(true);

    const ListIcon = (props) => {
        if (!props.component.hasOwnProperty('scanStatus')) {
            return <BlockIcon/>;
        } else if (props.component.scanStatus) {
            return <CheckIcon style={{color: green[500]}}/>
        } else {
            return <WarningIcon style={{color: red[500]}}/>
        }
    };

    useEffect(() => {
        let unmounted = false;

        let startDate = moment(props.startDate);
        let endDate = moment(props.endDate);

        async function fetchOverviewData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/overview/" + startDate.format() + "/" + endDate.format());

            res.json().then((data) => {
                if (unmounted)
                    return;

                setOverview(data);
                setLoading(false)
            }).catch(console.log)
        }

        fetchOverviewData();

        console.log("Fetched overview data");
        return () => {
            unmounted = true
        }
    }, [props, props.startDate, props.endDate]);

    if (loading) {
        return (
            <ScanOverviewListItemsSkeleton/>
        );
    }

    return (
        overview.map((intervalData, index) => (
            <li key={`overview-${index}`} className={classes.listSection}>
                <ul className={classes.ul}>
                    <ListSubheader>{moment(intervalData.date).format('DD/MM/YY - dddd')}</ListSubheader>
                    {intervalData.data.map((component, i) => (
                        <ListItem button key={`item-${i}`} component={Link} to={"/equipment/" + component.equipment._id + "/" + component._id}>
                            <ListItemIcon>
                                <ListIcon component={component}/>
                            </ListItemIcon>
                            <ListItemText primary={component.identifier} secondary={component.equipment.identifier}/>
                        </ListItem>
                    ))}
                </ul>
            </li>
        ))
    )
}
