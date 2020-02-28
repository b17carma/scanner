import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Skeleton from '@material-ui/lab/Skeleton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ListItemText from "@material-ui/core/ListItemText";
import PartIcon from "./PartIcon";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import PartListSkeleton from "./PartListSkeleton";
import EquipmentInfoPaper from "./EquipmentInfoPaper";

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
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchEquipmentInfo() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.match.params.equipmentId);
            const data = await res.json();

            setEquipment(data);
            setLoading(false);
        }

        async function fetchPartList() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/parts/" + props.match.params.equipmentId);
            const data = await res.json();

            setParts(data);
            setLoading(false);
        }

        fetchEquipmentInfo();
        fetchPartList();

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
                <Container maxWidth="xl" className={classes.textContainer}>
                    <Typography variant="overline" display="block">
                        Components
                    </Typography>
                </Container>
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