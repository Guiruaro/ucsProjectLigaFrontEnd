import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchPage from "./SearchPage";
import Home from "./Home";

export default function Routes(){
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/search" component={SearchPage} />
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>

    )
} 