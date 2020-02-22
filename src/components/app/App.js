import React from 'react';
import AppBarTop from "../appbar/AppBarTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../home/Home";
import AppDrawerLeft from "../drawer/AppDrawerLeft";

function App() {
    return (
        <Router>
            <CssBaseline/>
            <AppBarTop/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
