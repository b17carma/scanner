import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import {useHistory, withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import routes from "../routing/Routes";
import ProfileButton from "./ProfileButton";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
});

class AppBarTop extends React.Component {

    activeRoute() {
        return routes.find(route => route.path === ("/" + this.props.location.pathname.split("/")[1]));
    }

    render() {
        const {classes} = this.props;
        const activeRoute = this.activeRoute();

        const RenderBackIcon = () => {
            if (this.props.location.pathname.split("/").length > 2) {
                return (
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                onClick={() => this.props.history.goBack()}>
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
                            {activeRoute.barName}
                        </Typography>
                        <ProfileButton/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(AppBarTop));