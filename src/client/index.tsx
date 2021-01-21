import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { JssProvider } from "react-jss";
import { createGenerateClassName } from "@material-ui/core/styles";
import { store } from "common/redux/store";

import App from "common/App";

const preloadedState = (window as any)["__PRELOADED_STATE__"];
delete (window as any)["__PRELOADED_STATE__"];

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <Router>
            <JssProvider generateClassName={createGenerateClassName()}>
                <App />
            </JssProvider>
        </Router>
    </ReduxProvider>,
    document.getElementById("root")
);
