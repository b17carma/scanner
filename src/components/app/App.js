import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Routes from "../routing/Routes";
import BottomNav from "../navigation/BottomNav";
import AppBarTop from "../appbar/AppBarTop";
import Error404View from "../locations/error/Error404View";

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
                <Route component={Error404View} />
            </Switch>
            <BottomNav/>
        </BrowserRouter>
    );
}

export default App;
