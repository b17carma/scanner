import React from 'react';
import AppBarTop from "../appbar/AppBarTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PartList from "../locations/equipment/partlist/PartList";
import Routes from "../routing/Routes";
import PartInfo from "../locations/equipment/partinfo/PartInfo";
import Scan from "../locations/equipment/scan/Scan";
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

                <Route exact path="/equipment/:equipmentId" component={PartList}/>
                <Route exact path="/equipment/:equipmentId/:partId" component={PartInfo}/>
                <Route exact path="/scan/:equipmentId/:partId" component={Scan}/>
            </Switch>
            <BottomNav/>
        </BrowserRouter>
    );
}

export default App;
