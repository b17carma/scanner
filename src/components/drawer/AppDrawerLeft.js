import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link, withRouter} from "react-router-dom";
import routes from "../routing/Routes"
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    list: {
        width: 250,
    },
});

class AppDrawerLeft extends React.Component {

    currentRoute(routeName) {
        return this.props.location.pathname === routeName;
    }

    render() {
        const {classes} = this.props;

        return (
            <Drawer open={this.props.open} onClose={this.props.toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={this.props.toggleDrawer(false)}
                    onKeyDown={this.props.toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <ListItemText primary="Equipment Scanner"/>
                        </ListItem>

                        {routes.map((prop, key) => {
                            return (
                                <ListItem selected={this.currentRoute(prop.path)} button key={prop.sideBarName}
                                          component={Link}
                                          to={prop.path}>
                                    <ListItemIcon>
                                        <prop.icon/>
                                    </ListItemIcon>
                                    <ListItemText primary={prop.sideBarName}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </Drawer>
        )
    }
}

export default (withRouter(withStyles(styles)(AppDrawerLeft)));