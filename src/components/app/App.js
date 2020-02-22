import React from 'react';
import AppBarTop from "../appbar/AppBarTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Scanner from "../locations/scanner/Scanner";
import Analytics from "../locations/analytics/Analytics";

function App() {
    return (
        <Router>
            <CssBaseline/>
            <AppBarTop/>
            <Switch>
                <Route exact path="/" component={Scanner}/>
                <Route exact path="/scan" component={Scanner}/>
                <Route exact path="/analytics" component={Analytics}/>
            </Switch>
        </Router>
    );
}

export default App;
