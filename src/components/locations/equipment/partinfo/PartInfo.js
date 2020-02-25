import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {Container} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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
    const [part, setParts] = React.useState([{}]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://192.168.1.64:3001/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setParts(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

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
                    <Button variant="contained">Scan now</Button>
                </CardContent>
            </Paper>
            <Paper>
                <Container>
                    <Typography variant="h6" component="h1">
                        Past scans
                    </Typography>
                </Container>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <CheckIcon/>
                        </ListItemIcon>
                        <ListItemText primary="25/02/2020"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckIcon/>
                        </ListItemIcon>
                        <ListItemText primary="24/02/2020"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ClearIcon/>
                        </ListItemIcon>
                        <ListItemText primary="23/02/2020"/>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    )
}