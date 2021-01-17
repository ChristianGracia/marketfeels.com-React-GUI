import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";

import AppBar from "common/containers/AppBar/AppBar.component";

const App = () => {
    return (
        <React.Fragment>
            <AppBar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </React.Fragment>
    );
};

export default App;
