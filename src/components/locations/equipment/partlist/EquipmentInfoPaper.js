import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    media: {
        height: 200
    }
}));

export default function EquipmentInfoPaper(props) {
    const [equipment, setEquipment] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchEquipmentInfo() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/equipment/" + props.equipmentId);
            const data = await res.json();

            setEquipment(data);
            setLoading(false);
        }

        fetchEquipmentInfo();
        console.log("Fetched equipment info");
    }, [props.equipmentId]);

    const classes = useStyles();

    if (loading) {
        return <div/>; //TODO
    }

    return (
        <Paper elevation={0}>
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
        </Paper>
    )
}