import React from 'react';
import ContainedOverlineText from "../../util/ContainedOverlineText";
import {Box} from "@material-ui/core";
import AnalyticsOptionsList from "./AnalyticsOptionsList";
import DebugOptionsList from "./DebugOptionsList";

export default function AnalyticsView() {
    return (
        <Box>
            <ContainedOverlineText text="Options"/>
            <AnalyticsOptionsList/>
            <ContainedOverlineText text="Debug"/>
            <DebugOptionsList/>
        </Box>
    )
}
