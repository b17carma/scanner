import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CheckIcon from "@material-ui/icons/Check";
import {green, red} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HistoryIcon from "@material-ui/icons/History";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
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

export default function HomeView() {
    const classes = useStyles();

    const [overview, setOverview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStepData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/analytics/overview");

            res.json().then((data) => {
                setOverview(data);
                setLoading(false)
            }).catch(console.log)
        }

        fetchStepData();

        console.log("Fetched step data");
    }, []);

    function ListItems() {
        return (
            overview.map((overviewItem, index) => (
                <li key={`overview-${index}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{overviewItem.date}</ListSubheader>
                        {overviewItem.data.map((item, i) => (
                            <ListItem button key={`item-${i}`} component={Link} to={"/equipment/" + item.equipment._id + "/" + item._id}>
                                <ListItemIcon>
                                    {!item.hasOwnProperty('scanStatus') ? <HistoryIcon/> : item.scanStatus ? <CheckIcon style={{color: green[500]}}/> : <WarningIcon style={{color: red[500]}}/>}
                                </ListItemIcon>
                                <ListItemText primary={`${item.equipment.identifier} - ${item.identifier}`}/>
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))
        )
    }

    if (loading) {
        return (
            <div/>
        );
    }
    return (
        <Box className={classes.root}>
            <List className={classes.list}>
                <ListItems/>
            </List>
        </Box>
    )
}