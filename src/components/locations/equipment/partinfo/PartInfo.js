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

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function PartInfo(props) {
    const [parts, setParts] = React.useState([{}]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3001/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setParts(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    return (
       <div>
           ok
       </div>
    )
}