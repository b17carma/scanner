import ListItem from "@material-ui/core/ListItem";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export default function ComponentListItemsSkeleton(props) {
    return (
        <List className={props.classes.list}>
            {[...new Array(5)].map((item, index) => (
                    <ListItem key={index} button>
                        <ListItemIcon>
                            <Skeleton variant="circle" width={30} height={30}/>
                        </ListItemIcon>
                        <Skeleton variant="text" width={150}/>
                    </ListItem>
                )
            )}
        </List>
    )
}