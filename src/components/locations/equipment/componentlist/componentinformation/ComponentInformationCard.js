import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    media: {
        height: 200
    },
    paper: {
        marginBottom: theme.spacing(1)
    }
}));

export default function ComponentInformationCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.paper}>
            <CardMedia
                className={classes.media}
                image={"/img/" + props.component.image}
                title="Component Overview"
            />
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {props.component.equipment.identifier} - {props.component.identifier}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.component.description}
                </Typography>
            </CardContent>
        </Card>
    )
}