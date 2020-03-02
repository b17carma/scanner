import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
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

export default function PartInfoCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.paper}>
                <CardMedia
                    className={classes.media}
                    image={"/img/" + props.part.image}
                    title="Part Overview"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.part.equipment.identifier} - {props.part.identifier}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.part.description}
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small" color="primary" component={Link} to={"/scan"}>Scan now</Button>
            </CardActions>
        </Card>
    )
}