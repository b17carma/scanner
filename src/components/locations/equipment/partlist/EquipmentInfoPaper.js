import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    media: {
        height: 200
    }
}));

export default function EquipmentInfoPaper(props) {
    const classes = useStyles();

    return (
        <Paper elevation={0}>
            <CardMedia
                className={classes.media}
                image={"/img/" + props.equipment.image}
                title="Equipment Overview"
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.equipment.identifier}
                </Typography>
            </CardContent>
        </Paper>
    )
}