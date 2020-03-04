import Skeleton from "@material-ui/lab/Skeleton";
import {Container} from "@material-ui/core";
import React from "react";

export default function ComponentInformationSkeleton() {
    return (
        <div>
            <Skeleton variant="rect" width="100%" height={200}/>
            <Container>
                <Skeleton variant="text" width={200} height={50}/>
                <Skeleton variant="text" width={300}/>
                <Skeleton variant="text" width={300}/>
            </Container>
        </div>
    )
}