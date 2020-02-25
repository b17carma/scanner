import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Skeleton from '@material-ui/lab/Skeleton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        margin: 0
    },
    box: {
        margin: "auto"
    }
}));

export default function PartList(props) {
    const [equipment, setEquipment] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchEquipmentInfo() {
            const res = await fetch("http://localhost:3001/equipment/" + props.match.params.equipmentId);
            const data = await res.json();

            setEquipment(data);
            setLoading(false);
        }

        fetchEquipmentInfo();

        console.log("Fetched equipment & part info");
    }, [props.match.params.equipmentId]);

    const classes = useStyles();

    return (
        <div>
            <List className={classes.root}>
                {loading ? [...new Array(3)].map((item, index) => (
                    <ListItem key={index} button>
                        <ListItemAvatar>
                            <Skeleton variant="circle" width={40} height={40}/>
                        </ListItemAvatar>
                        <Skeleton variant="text" width={100}/>
                    </ListItem>
                )) : (equipment.parts.map((part, i) => (
                    <ListItem key={i} button component={Link}
                              to={"/equipment/" + props.match.params.equipmentId + "/" + part._id}>
                        <ListItemAvatar>
                            <Avatar
                                alt="Part image"
                                src="logo192.png"
                            />
                        </ListItemAvatar>
                        <ListItemText id={i} primary={part.identifier}/>
                    </ListItem>
                )))}
            </List>
        </div>
    )
}