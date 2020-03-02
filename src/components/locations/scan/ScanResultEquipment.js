import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: theme.spacing(1)
    },
    media: {
        height: 150
    },
}));

export default function ScanResultEquipment(props) {
    const classes = useStyles();

    return (
        <Card className={classes.paper} variant="outlined">
            <CardMedia
                className={classes.media}
                image={"/img/" + props.part.image}
                title="Part Overview"
            />
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {props.part.equipment.identifier} - {props.part.identifier}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.part.description}
                </Typography>
            </CardContent>
        </Card>
    )
}