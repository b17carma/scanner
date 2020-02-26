import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import routes from "../../routing/Routes";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 2000,
    },
});

class BottomNav extends React.Component {

    handleChange(newValue) {
        this.props.history.push(newValue)
    }

    filteredRoutes(routes) {
        return routes.filter(function (route) {
            return route.display === true
        })
    }

    activeValue() {
        return this.props.location.pathname.split("/")[1];
    }

    render() {
        const {classes} = this.props;

        return (
            <BottomNavigation value={"/" + this.activeValue()} className={classes.root}
                              onChange={(event, newValue) => {
                                  this.handleChange(newValue);
                              }}>

                {this.filteredRoutes(routes).map((prop, key) => {
                    return (
                        <BottomNavigationAction label={prop.barName} value={prop.path} key={key}
                                                icon={<prop.icon/>}/>
                    )
                })}
            </BottomNavigation>
        )
    }
}

export default withRouter(withStyles(styles)(BottomNav));