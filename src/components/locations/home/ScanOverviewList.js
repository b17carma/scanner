import ListSubheader from "@material-ui/core/ListSubheader";
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ScanOverviewListItemsSkeleton from "../../skeleton/ScanOverviewListItemsSkeleton";
import moment from "moment";
import List from "@material-ui/core/List";
import ScanOverviewListItem from "./ScanOverviewListItem";

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
    },
    subHeader: {
        top: theme.spacing(7)
    }
}));

export default function ScanOverviewList(props) {
    const classes = useStyles();

    const [overview, setOverview] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <List className={classes.list}>
            {overview.map((intervalData, index) => (
                <li key={`overview-${index}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader className={classes.subHeader}>{moment(intervalData.date).format('DD/MM/YY - dddd')}</ListSubheader>
                        {intervalData.equipment.map((equipment, i) => (
                            <ScanOverviewListItem equipment={equipment} index={i} location={props.location}/>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    )
}