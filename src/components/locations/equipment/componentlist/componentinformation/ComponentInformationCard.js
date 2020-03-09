import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ComponentInformationSkeleton from "../../../../skeleton/ComponentInformationSkeleton";

const useStyles = makeStyles(theme => ({
    media: {
        height: 200
    },
    paper: {
        marginBottom: theme.spacing(1)
    }
}));

export default function ComponentInformationCard(props) {
    const [component, setComponent] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchComponentData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.equipmentId + "/" + props.componentId);
            const component = await res.json();
            setComponent(component);
            setLoading(false);
        }

        fetchComponentData();

        console.log("Fetched component data");
    }, [props.equipmentId, props.componentId]);

    const classes = useStyles();

    function translate(frequencyType) {
        return frequencyType === 0 ? 'day' : frequencyType === 1 ? 'week' : frequencyType === 2 ? 'month' : 'year';
    }

    if (loading) {
        return <ComponentInformationSkeleton/>
    }

    return (
        <Card elevation={0} className={classes.paper}>
            <CardMedia
                className={classes.media}
                image={"/img/" + component.image}
                title="Component Overview"
            />
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {component.equipment.identifier} - {component.identifier}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {component.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {component.frequency} time(s)
                    / {translate(component.frequencyType)} / {component.hasOwnProperty('frequencyDays') ? component.frequencyDays.toString() : 'any day'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" component={Link} to="/scan">
                    Scan Now
                </Button>
            </CardActions>
        </Card>
    )
}