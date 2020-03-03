import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import PartIcon from "./PartIcon";
import Container from "@material-ui/core/Container";
import PartListSkeleton from "./PartListSkeleton";
import EquipmentInfoPaper from "./EquipmentInfoPaper";
import ContainedOverlineText from "../../../util/ContainedOverlineText";
import AlarmIcon from "@material-ui/icons/Alarm";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ActionRequiredList from "./ActionRequiredList";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    textContainer: {
        marginTop: theme.spacing(1)
    },
}));

export default function PartList(props) {
    const [equipment, setEquipment] = React.useState({});
    const [parts, setParts] = React.useState([]);
    const [requiredParts, setRequiredParts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchEquipmentInfo() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.match.params.equipmentId);
            const data = await res.json();

            setEquipment(data);
            setLoading(false);
        }

        async function fetchPartList() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.match.params.equipmentId);
            const data = await res.json();

            setParts(data);
        }

        async function fetchRequiredParts() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/scan/required/" + props.match.params.equipmentId);
            const data = await res.json();

            setRequiredParts(data);
            setLoading(false);
        }

        fetchEquipmentInfo();
        fetchPartList();
        fetchRequiredParts();

        console.log("Fetched equipment & part info");
    }, [props.match.params.equipmentId]);

    const classes = useStyles();

    if (loading) {
        return (
            <PartListSkeleton/>
        );
    } else {
        return (
            <Box>
                <EquipmentInfoPaper equipment={equipment}/>
                <ActionRequiredList requiredParts={requiredParts}/>
                <ContainedOverlineText text="All Components"/>
                <List className={classes.root}>
                    {parts.map((part, i) => (
                        <ListItem key={i} button component={Link}
                                  to={"/equipment/" + props.match.params.equipmentId + "/" + part._id}>
                            <PartIcon part={part}/>
                            <ListItemText id={i} primary={part.identifier}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    }
}