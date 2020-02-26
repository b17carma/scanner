import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Skeleton from '@material-ui/lab/Skeleton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import AlarmIcon from '@material-ui/icons/Alarm';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {green, red} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        margin: 0
    },
    media: {
        height: "200px"
    }
}));

export default function PartList(props) {
    const [equipment, setEquipment] = React.useState({});
    const [scans, setScans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchEquipmentInfo() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.match.params.equipmentId);
            const data = await res.json();

            setEquipment(data);
            setLoading(false);
        }

        async function fetchScanInfo() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/scan/" + props.match.params.equipmentId);
            const data = await res.json();

            setScans(data);
        }

        fetchEquipmentInfo();
        fetchScanInfo();

        console.log("Fetched equipment & part info");
    }, [props.match.params.equipmentId]);

    const classes = useStyles();

    function isToday(inputDate) {
        return new Date(inputDate).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
    }

    function scanStatus(part) {
        const filteredScans = scans.filter(function (scan) {
            return scan.partId === part._id && isToday(scan.time);
        });

        if (filteredScans.length === 0)
            return 2;

        return filteredScans[0].status ? 0 : 1;
    }

    const PartIcon = (props) => {
        const status = scanStatus(props.part);

        return (
            <ListItemIcon>
                {status === 0 ? <CheckIcon style={{color: green[500]}}/> : status === 1 ?
                    <WarningIcon style={{color: red[500]}}/> : <AlarmIcon/>}
            </ListItemIcon>
        )
    };

    if (loading) {
        return (
            [...new Array(3)].map((item, index) => (
                    <ListItem key={index} button>
                        <ListItemAvatar>
                            <Skeleton variant="circle" width={40} height={40}/>
                        </ListItemAvatar>
                        <Skeleton variant="text" width={100}/>
                    </ListItem>
                )
            ));
    } else {
        return (
            <Box>
                <Card>
                    <CardMedia
                        className={classes.media}
                        image={"/img/" + equipment.image}
                        title="Equipment Overview"
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {equipment.identifier}
                        </Typography>
                    </CardContent>
                </Card>
                <List className={classes.root}>
                    {equipment.parts.map((part, i) => (
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