import React from 'react';
import AppBarTop from "../appbar/AppBarTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Scanner from "../locations/scanner/Scanner";
import Analytics from "../locations/analytics/Analytics";
import Home from "../locations/home/Home";
import Scan from "../locations/scan/Scan";

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <AppBarTop/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/scan" component={Scanner}/>
                <Route exact path="/analytics" component={Analytics}/>

                <Route path="/scan/:id" component={Scan}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
