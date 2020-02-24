import React from 'react';
import AppBarTop from "../appbar/AppBarTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PartList from "../locations/partlist/PartList";
import Routes from "../routing/Routes";
import PartInfo from "../locations/partinfo/PartInfo";

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

                <Route exact path="/parts/:equipmentId" component={PartList}/>
                <Route exact path="/parts/:equipmentId/:partId" component={PartInfo}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
