import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";

import AppBar from "common/containers/AppBar/AppBar.component";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const themeObject = {
    palette: {
        primary: { main: "#053f5b" },
        secondary: { main: "#5e3c6f" },
        type: "light"
    },
    themeName: "Blue Lagoon 2020",
    typography: {
        useNextVariants: true,
        fontFamily: "Bitter"
    }
};

const useDarkMode = () => {
    const [theme, setTheme] = useState(themeObject);

    const {
        palette: { type }
    } = theme;
    const toggleDarkMode = () => {
        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type: type === "light" ? "dark" : "light"
            }
        };
        setTheme(updatedTheme);
    };
    return [theme, toggleDarkMode];
};

const App = () => {
    const [theme, toggleDarkMode] = useDarkMode();

    const themeConfig = createMuiTheme(theme);
    const sheetsManager = new Map();
    return (
        <React.Fragment>
            <MuiThemeProvider theme={themeConfig} sheetsManager={sheetsManager}>
                <AppBar toggleDarkMode={toggleDarkMode} />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
