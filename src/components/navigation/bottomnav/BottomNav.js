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

    render() {
        const {classes} = this.props;

        return (
            <BottomNavigation value={this.props.location.pathname} className={classes.root}
                              onChange={(event, newValue) => {
                                  this.handleChange(newValue);
                              }}>

                {routes.map((prop, key) => {
                    return (
                        <BottomNavigationAction label={prop.sideBarName} value={prop.path} icon={<prop.icon/>}/>
                    )
                })}
            </BottomNavigation>
        )
    }
}

export default withRouter(withStyles(styles)(BottomNav));