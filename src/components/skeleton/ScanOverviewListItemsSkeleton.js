import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor: theme.palette.background.paper
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    }
}));

export default function ScanOverviewListItemsSkeleton() {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {[...new Array(5)].map((item, index) => (
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
            )}
        </List>

    )
}
