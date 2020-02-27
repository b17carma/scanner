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
import {format} from 'date-fns'
import {green, red} from "@material-ui/core/colors";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8)
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
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
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
        return (
            scans.slice(0, 5).map((scan, i) => (
                <ListItem key={i}>
                    <ListItemIcon>
                        {scan.status ? <CheckIcon style={{color: green[500]}}/> :
                            <WarningIcon style={{color: red[500]}}/>}
                    </ListItemIcon>
                    <ListItemText id={i} primary={format(new Date(scan.time), 'dd/MM/yyyy HH:mm:ss')}/>
                </ListItem>
            ))
        )
    }

    const classes = useStyles();

    if (loading) {
        return (
            <div>
                <Skeleton variant="rect" width="100%" height={200}/>
                <Container>
                    <Skeleton variant="text" width={200} height={50}/>
                    <Skeleton variant="text" width={300}/>
                    <Skeleton variant="text" width={300}/>
                </Container>
            </div>
        )
    } else {
        return (
            <Box className={classes.root}>
                <Card className={classes.paper} variant="outlined">
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
                </Card>
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