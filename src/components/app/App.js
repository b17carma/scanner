import React from 'react';
import AppBarTop from "../appbar/AppBarTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Scan from "../locations/scan/Scan";
import Routes from "../routing/Routes";

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <AppBarTop/>
            <Switch>
                {Routes.map((prop, key) => {
                    return (
                        <Route exact path={prop.path} component={prop.component} key={key}/>
                    )
                })}

                <Route path="/scan/:id" component={Scan}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
