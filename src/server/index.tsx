import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as Redux from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";
import { SheetsRegistry } from "react-jss";
import { JssProvider } from "react-jss";
import {
    MuiThemeProvider,
    createGenerateClassName
} from "@material-ui/core/styles";

import App from "common/App";
import { store } from "common/redux/store";

declare const module: any;

function main() {
    const express = Express();
    const port = process.env.PORT || 3000;

    express.use(Express.static("build"));

    express.get("/*", (req, res, next) => {
        const sheetsRegistry = new SheetsRegistry();

        const appHTML = ReactDOM.renderToString(
            <ReduxProvider store={store}>
                <Router location={req.path} context={{}}>
                    <JssProvider
                        registry={sheetsRegistry}
                        generateClassName={createGenerateClassName()}
                    >
                        <App />
                    </JssProvider>
                </Router>
            </ReduxProvider>
        );
        const appInitialState = JSON.stringify(store.getState()).replace(
            /</g,
            "\\u003c"
        );
        const appCSS = sheetsRegistry.toString();

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                  <meta name="description" content="Stock + Crypto market sentiment from all over the internet in one place" />
                  <meta name="keywords"content="marketfeels market crypto stock ai scraping christiangracia charts" />
                  <meta charset="utf-8" />

                  <title>MarketFeels.com - See whats being talked about</title>
                  <base href="/" />


                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <style>
                        body {
                            margin: 0px;
                            padding: 0px;
                        }
                    </style>
                    <style id="jss-server-side">${appCSS}</style>
                </head>
                <body>
                    <main id="root">${appHTML}</main>
                    <script>
                        window["__PRELOADED_STATE__"] = ${appInitialState}
                    </script>
                    <script type="application/javascript" src="bundle.js"></script>
                </body>
            </html>
        `);
        res.end();
        next();
    });

    const server = express.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();

//will set up later

//   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
//   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
//   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
//   <link rel="manifest" href="/site.webmanifest"></link>
//                      <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/assets/favicon/apple-touch-icon.png">
//    <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%assets/favicon/favicon-32x32.png">
//    <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%assets/favicon/favicon-16x16.png">
//    <link rel="manifest" href="%PUBLIC_URL%assets/favicon/site.webmanifest"></link>
