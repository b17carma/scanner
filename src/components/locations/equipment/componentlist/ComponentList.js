import ContainedOverlineText from "../../../util/ContainedOverlineText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ComponentIcon from "./ComponentIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ComponentListItemsSkeleton from "../../../skeleton/ComponentListItemsSkeleton";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    textContainer: {
        marginTop: theme.spacing(1)
    },
}));

export default function ComponentList(props) {
    const [components, setComponents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        let unmounted = false;

        async function fetchComponentList() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.equipmentId);
            const components = await res.json();

            if (unmounted)
                return;

            setLoading(false);
            setComponents(components);
        }

        fetchComponentList();

        console.log("Fetched component list");
        return () => {unmounted = true}
    }, [props.equipmentId]);

    const classes = useStyles();

    if (loading) {
        return <ComponentListItemsSkeleton classes={classes}/>
    }

    return (
        <div>
            <ContainedOverlineText text="All Components"/>
            <List className={classes.root}>
                {components.map((component, i) => (
                    <ListItem key={i} button component={Link}
                              to={"/equipment/" + props.equipmentId + "/" + component._id}>
                        <ComponentIcon component={component}/>
                        <ListItemText id={i} primary={component.identifier}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}