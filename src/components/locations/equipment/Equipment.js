import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SampleImage from "../../../images/machine.jpg"
import Container from "@material-ui/core/Container";
import EquipmentCardSkeleton from "../../skeleton/EquipmentCardSkeleton";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8)
    },
    card: {
        marginBottom: theme.spacing(1),
    },
    media: {
        height: 120,
    }
}));

export default function Equipment() {
    const classes = useStyles();

    const [equipment, setEquipment] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://192.168.1.64:3001/equipment");

            res.json().then((res) => {
                setEquipment(res);
                setLoading(false)
            }).catch(console.log)
        }

        fetchData();
        console.log("Fetched data")
    }, []);

    return (
        <Container className={classes.root}>
            {loading ? [...new Array(5)].map((item, index) => (
                <EquipmentCardSkeleton key={'skeleton-' + index}/>
            )) : equipment.map((equipment, i) => (
                <Card className={classes.card} key={i}>
                    <CardActionArea component={Link} to={"/equipment/" + equipment._id}>
                        <CardMedia
                            className={classes.media}
                            image={SampleImage}
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
            ))}
        </Container>
    )
}