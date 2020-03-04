import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function EquipmentInfoCardSkeleton() {
    return (
        <Card elevation={0}>
            <Skeleton variant="rect" height={200}/>
            <CardContent>
                <Skeleton variant="text" width={250} height={35}/>
            </CardContent>
        </Card>
    )
}