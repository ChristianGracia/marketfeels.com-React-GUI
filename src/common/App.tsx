import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";

import AppBar from "common/containers/AppBar/AppBar.component";
import {
    Button,
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
                <AppBar toggleDarkMode={toggleDarkMode} />
                <Paper>
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                </Paper>

                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
