import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Chart3 from "./components/Chart3";
import About from './components/About';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/chart3">
                <Chart3 />
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