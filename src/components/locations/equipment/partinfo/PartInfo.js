import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {Container} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import { format } from 'date-fns'
import {green, red} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    media: {
        height: "200px"
    },
    paper: {
      marginBottom: theme.spacing(1)
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
    actionPaper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1)
    }
}));

export default function PartInfo(props) {
    const [part, setPart] = React.useState([]);
    const [scans, setScans] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchPartData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.match.params.equipmentId + "/" + props.match.params.partId);
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

    function scanList() {
        if (scans.length > 0) {
            return (
                scans.slice(0, 5).map((scan, i) => (
                    <ListItem key={i}>
                        <ListItemIcon>
                            {scan.status ? <CheckIcon style={{color: green[500]}}/> : <WarningIcon style={{color: red[500]}}/>}
                        </ListItemIcon>
                        <ListItemText id={i} primary={format(new Date(scan.time), 'dd/MM/yyyy HH:mm:ss')}/>
                    </ListItem>
                ))
            )
        }
        return String.empty;
    }

    const classes = useStyles();

    if (loading) {
        return (
            <div>
                TODO
            </div>
        )
    } else {
        return (
            <Box>
                <Paper className={classes.paper}>
                    <CardMedia
                        className={classes.media}
                        image={"/img/" + part.image}
                        title="Part Overview"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {part.identifier}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            {part.description}
                        </Typography>
                        <Button component={Link} to={"/scan"} variant="contained">Scan now</Button>
                    </CardContent>
                </Paper>
                <Paper>
                    <Container>
                        <Typography variant="h6" component="h1">
                            Recent scans
                        </Typography>
                    </Container>
                    <List className={classes.list}>
                        {scanList()}
                    </List>
                </Paper>
            </Box>
        )
    }
}