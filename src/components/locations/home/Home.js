import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    }
}));

export default function Home() {

    const classes = useStyles();
    const [equipment, setEquipment] = useState([{}]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            res.json().then((res) => {
                setEquipment(res)
            }).catch(console.log)
        }

        fetchData();
        console.log("Fetched data")
    }, []);

    return (
        <div className={classes.root}>
            <List>
                {equipment.map((equipment, i) => (
                    <Card variant="outlined" className={classes.root} key={i}>
                        <CardActionArea component={Link} to={"/scan/" + equipment.id}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
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
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </List>
        </div>

    )
}