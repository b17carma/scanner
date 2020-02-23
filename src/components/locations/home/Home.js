import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SampleImage from "../../../images/contemplative-reptile.jpg"
import Container from "@material-ui/core/Container";
import EquipmentCardSkeleton from "../../skeleton/EquipmentCardSkeleton";

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(1),
    },
    media: {
        height: 120,
    }
}));

export default function Home() {
    const classes = useStyles();

    const [equipment, setEquipment] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            res.json().then((res) => {
                setEquipment(res);
                setLoading(false)
            }).catch(console.log)
        }

        fetchData();
        console.log("Fetched data")
    }, []);

    return (
        <Container>
            <List>
                {loading ? [...new Array(10)].map((item, index) => (
                    <EquipmentCardSkeleton key={'skeleton-' + index}/>
                    )) : equipment.map((equipment, i) => (
                    <Card className={classes.card} key={i}>
                        <CardActionArea component={Link} to={"/scan/" + equipment.id}>
                            <CardMedia
                                className={classes.media}
                                image={SampleImage}
                                title="Equipment Preview"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {equipment.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {equipment.username}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                ))}
            </List>
        </Container>
    )
}