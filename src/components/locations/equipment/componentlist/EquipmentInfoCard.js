import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import EquipmentInfoCardSkeleton from "../../../skeleton/EquipmentInfoCardSkeleton";

const useStyles = makeStyles(theme => ({
    media: {
        height: 200
    }
}));

export default function EquipmentInfoCard(props) {
    const [equipment, setEquipment] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        let unmounted = false;

        async function fetchEquipmentInfo() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.equipmentId);
            const data = await res.json();

            if (unmounted)
                return;

            setEquipment(data);
            setLoading(false);
        }

        fetchEquipmentInfo();
        console.log("Fetched equipment info");
        return () => {unmounted = true}
    }, [props.equipmentId]);

    const classes = useStyles();

    if (loading) {
        return <EquipmentInfoCardSkeleton/>;
    }

    return (
        <Card elevation={0}>
            <CardMedia
                className={classes.media}
                image={"/img/" + equipment.image}
                title="Equipment Overview"
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {equipment.identifier}
                </Typography>
            </CardContent>
        </Card>
    )
}