import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import List from "@material-ui/core/List";

export default function ComponentListItemsSkeleton(props) {
    return (
        <List className={props.classes.root}>
            {[...new Array(3)].map((item, index) => (
                    <ListItem key={index} button>
                        <ListItemAvatar>
                            <Skeleton variant="circle" width={35} height={35}/>
                        </ListItemAvatar>
                        <Skeleton variant="text" width={100}/>
                    </ListItem>
                )
            )}
        </List>

    )
}