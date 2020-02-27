import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {Container} from "@material-ui/core";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import ScanList from "./ScanList";

const useStyles = makeStyles(theme => ({
    root: {
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
                <Paper className={classes.paper} variant="outlined">
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
                <Container maxWidth="xl" className={classes.textContainer}>
                    <Typography variant="overline" display="block">
                        Recent scans
                    </Typography>
                </Container>
                <List className={classes.list}>
                    <ScanList scans={scans}/>
                </List>
            </Box>
        )
    }
}