import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/HomePage/Home";
import About from "common/pages/AboutPage/About";
import Profile from "common/pages/ProfilePage/Profile";
import SignUp from "common/pages/SignUpPage/SignUp";
import Login from "common/pages/LoginPage/Login";
import StocksMain from "common/pages/StockPages/MainPage/StocksMain";
import CryptoMain from "common/pages/CryptoPages/MainPage/CryptoMain";

import AppBar from "common/containers/AppBar/AppBar.component";
import {
    createMuiTheme,
    MuiThemeProvider,
    PaletteType
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
                <AppBar toggleDarkMode={toggleDarkMode} />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/stocks" component={StocksMain} />
                    <Route exact path="/crypto" component={CryptoMain} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route
                        exact
                        path="/stocks/most-mentions"
                        component={Home}
                    />
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/about" component={About} />
                </Switch>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
