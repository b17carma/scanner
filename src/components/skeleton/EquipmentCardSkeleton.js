import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

export default function EquipmentCardSkeleton(props) {
    return (
        <Container>
            <Card className={props.classes.card}>
                <CardActionArea>
                    <Skeleton animation="wave" variant="rect" height={120} />
                    <CardContent>
                        <Skeleton animation="wave" variant="text" width={250} height={53}/>
                        <Skeleton animation="wave" variant="text" width={250}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}