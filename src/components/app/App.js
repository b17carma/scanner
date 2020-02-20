import React from 'react';
import AppHeader from "../header/AppHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../home/Home";

function App() {
    return (
        <Router>
            <CssBaseline/>
            <AppHeader/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
