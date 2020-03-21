import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import {withRouter} from "react-router-dom";
import routes from "../routing/Routes";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));


function AppBarTop(props) {
    let split = props.location.pathname.split("/")[1];
    if (split === 'home')
        split = '';

    const activeRoute = routes.find(route => route.path === ("/" + split));
    const classes = useStyles();

    const RenderBackIcon = () => {
        if (props.location.pathname.split("/").length > 2) {
            return (
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => props.history.goBack()}>
                    <BackIcon/>
                </IconButton>
            )
        } else {
            return null
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <RenderBackIcon/>
                    <Typography variant="h6" className={classes.title}>
                        {activeRoute== null ? "Equipment Scanner" : activeRoute.barName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(AppBarTop);
