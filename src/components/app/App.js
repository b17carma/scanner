import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Routes from "../routing/Routes";
import BottomNav from "../navigation/bottomnav/BottomNav";

function App() {

    return (
        <BrowserRouter>
            <CssBaseline/>
            <Switch>
                {Routes.map((prop, key) => {
                    return (
                        <Route exact path={prop.path} component={prop.component} key={key}/>
                    )
                })}
            </Switch>
            <BottomNav/>
        </BrowserRouter>
    );
}

export default App;
