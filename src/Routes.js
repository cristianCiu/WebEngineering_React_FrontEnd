import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Chart1 from "./containers/Chart1";
import About from './containers/About';
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/chart1">
                <Chart1 />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}