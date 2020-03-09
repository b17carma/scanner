import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import HomeOverviewList from "./HomeOverviewList";
import ContainedOverlineText from "../../util/ContainedOverlineText";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(8)
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function HomeView() {
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <ContainedOverlineText text="Scan Overview"/>
            <List className={classes.list}>
                <HomeOverviewList/>
            </List>
        </Box>
    )
}