import React from 'react';
import ContainedOverlineText from "../../util/ContainedOverlineText";
import {Box} from "@material-ui/core";
import AnalyticsOptionsList from "./AnalyticsOptionsList";

export default function AnalyticsView() {
    return (
        <Box>
            <ContainedOverlineText text="Options"/>
            <AnalyticsOptionsList/>
        </Box>
    )
}