import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import {Send as SendIcon} from "@material-ui/icons"
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Home() {

    const classes = useStyles();

    const [equipment, setEquipment] = useState([{}]);

    async function fetchData() {
        const res = await fetch("http://jsonplaceholder.typicode.com/users");

        res.json().then((res) => {
            setEquipment(res)
        }).catch(console.log)
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div className={classes.root}>
            <List>
                {equipment.map((equipment, i) => (
                    <ListItem button divider key={i}>
                        <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon>
                        <ListItemText primary={equipment.name}/>
                    </ListItem>
                ))};
            </List>
        </div>

    )
}