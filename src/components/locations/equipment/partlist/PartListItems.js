import ContainedOverlineText from "../../../util/ContainedOverlineText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import PartIcon from "./PartIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PartListSkeleton from "../../../skeleton/PartListSkeleton";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    textContainer: {
        marginTop: theme.spacing(1)
    },
}));

export default function PartListItems(props) {
    const [parts, setParts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchPartList() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.equipmentId);
            const data = await res.json();
            setLoading(false);
            setParts(data);
        }

        fetchPartList();

        console.log("Fetched part list");
    }, [props.equipmentId]);

    const classes = useStyles();

    if (loading) {
        return <PartListSkeleton/>
    }

    return (
        <div>
            <ContainedOverlineText text="All Components"/>
            <List className={classes.root}>
                {parts.map((part, i) => (
                    <ListItem key={i} button component={Link}
                              to={"/equipment/" + props.equipmentId + "/" + part._id}>
                        <PartIcon part={part}/>
                        <ListItemText id={i} primary={part.identifier}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}