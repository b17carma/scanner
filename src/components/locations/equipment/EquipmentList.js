import React, {useEffect, useState} from "react";
import EquipmentListSkeleton from "../../skeleton/EquipmentListSkeleton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(1),
    },
    media: {
        height: 120,
    }
}));

export default function EquipmentList(props) {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const analytics = props.location.pathname === '/analytics/equipment' || props.location.pathname === '/analytics/equipment/';
    const classes = useStyles();

    useEffect(() => {
        async function fetchEquipmentData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment");

            res.json().then((res) => {
                setEquipment(res);
                setLoading(false)
            }).catch(console.log)
        }

        fetchEquipmentData();

        console.log("Fetched equipment data");
    }, []);

    if (loading) {
        return (
            <EquipmentListSkeleton classes={classes} key={index}/>
        )
    }

    return (
        equipment.map((equipment, i) => (
            <Card variant="outlined" className={classes.card} key={i}>
                <CardActionArea component={Link}
                                to={(analytics ? "/analytics/equipment/" : "/equipment/") + equipment._id}>
                    <CardMedia
                        className={classes.media}
                        image={"/img/" + equipment.image}
                        title="Equipment Preview"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {equipment.identifier}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {equipment._id}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        ))
    )
}