import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

export default function PartListSkeleton() {
    return (
        [...new Array(3)].map((item, index) => (
                <ListItem key={index} button>
                    <ListItemAvatar>
                        <Skeleton variant="circle" width={40} height={40}/>
                    </ListItemAvatar>
                    <Skeleton variant="text" width={100}/>
                </ListItem>
            )
        )
    )
}