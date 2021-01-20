import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/HomePage/Home";
import About from "common/pages/AboutPage/About";
import Profile from "common/pages/ProfilePage/Profile";
import SignUp from "common/pages/SignUpPage/SignUp";
import Login from "common/pages/LoginPage/Login";
import Privacy from "common/pages/PrivacyPage/Privacy";
import StocksMain from "common/pages/StockPages/Main/StocksMain";
import StockMostMentions from "common/pages/StockPages/StockMostMentions/StockMostMentions";
import AllStocks from "common/pages/StockPages/AllStocks/AllStocks";
import CryptoMain from "common/pages/CryptoPages/Main/CryptoMain";

import AppBar from "common/containers/AppBar/AppBar.component";
import {
    createMuiTheme,
    MuiThemeProvider,
    PaletteType,
    Paper
} from "@material-ui/core";
import { useState } from "react";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const themeObject = {
    palette: {
        primary: {
            main: "#800080"
        },
        secondary: {
            main: "#11cb5f"
        },

        type: "light"
    },
    themeName: "Market Feels Theme",
    typography: {
        fontFamily: "Bitter",
        useNextVariants: true
    }
};

const useDarkMode = () => {
    const [theme, setTheme] = useState(themeObject);

    const {
        palette: { type }
    } = theme;
    const toggleDarkMode = (): any => {
        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type:
                    type === "light"
                        ? ("dark" as PaletteType)
                        : ("light" as PaletteType)
            }
        };
        setTheme(updatedTheme);
    };
    return [theme, toggleDarkMode];
};

const App = () => {
    const [theme, toggleDarkMode] = useDarkMode();

    const themeConfig = createMuiTheme(theme as ThemeOptions);

    const sheetsManager = new Map();

    return (
        <React.Fragment>
            <MuiThemeProvider theme={themeConfig} sheetsManager={sheetsManager}>
                <Paper>
                    <AppBar toggleDarkMode={toggleDarkMode} />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/stocks" component={StocksMain} />
                        <Route exact path="/crypto" component={CryptoMain} />
                        <Route exact path="/profile" component={Profile} />
                        <Route
                            exact
                            path="/stocks/most-mentions"
                            component={StockMostMentions}
                        />
                        <Route exact path="/stocks/all" component={AllStocks} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/privacy" component={Privacy} />
                    </Switch>
                </Paper>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
