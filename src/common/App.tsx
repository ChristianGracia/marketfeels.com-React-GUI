import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";

import AppBar from "common/containers/AppBar/AppBar.component";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { useState } from "react";

const themeObject = {
    palette: {
        primary: {
            main: "#fff"
            // light: "#2D77A9",
            // dark: "#998899",
            // contrastText: "#212121"
        },
        secondary: {
            main: "#000"
            // light: "#aab6fe",
            // dark: "#000",
            // contrastText: "#fafafa"
        },
        type: "light"
    }
};

export const useDarkMode = () => {
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
    return (
        <React.Fragment>
            <MuiThemeProvider theme={themeConfig}>
                <AppBar toggleDarkMode={toggleDarkMode} />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
