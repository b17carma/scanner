import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

export default function EquipmentListSkeleton(props) {
    return (
        [...new Array(3)].map((item, index) => (
            <Card key={index} className={props.classes.card} variant="outlined">
                <CardActionArea>
                    <Skeleton variant="rect" height={120}/>
                    <CardContent>
                        <Skeleton variant="text" width={250} height={53}/>
                        <Skeleton variant="text" width={250}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        )))

}