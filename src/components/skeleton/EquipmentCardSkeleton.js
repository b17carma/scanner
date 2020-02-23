import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';

export default function EquipmentCardSkeleton() {
    return (
        <div>
            <Skeleton variant="rect" height={120} />
            <Skeleton variant="text" width={250}/>
            <Skeleton variant="text" width={250}/>
        </div>
    )
}