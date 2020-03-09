import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    }
}));

export default function HomeOverviewListItemsSkeleton() {
    const classes = useStyles();

    return (
        [...new Array(5)].map((item, index) => (
            <li key={index} className={classes.listSection}>
                <ul className={classes.ul}>
                    <ListSubheader>
                        <Skeleton variant="text" width={70} height={20}/>
                    </ListSubheader>
                    {[...new Array(4)].map((item, i) => (
                        <ListItem key={"item" + i}>
                            <ListItemIcon>
                                <Skeleton variant="circle" width={30} height={30}/>
                            </ListItemIcon>
                            <Skeleton variant="text" width={200} height={30}/>
                        </ListItem>
                    ))}
                </ul>
            </li>
            )
        )
    )
}