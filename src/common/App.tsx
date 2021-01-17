import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";

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
        primary: { main: "#053f5b" },
        secondary: { main: "#5e3c6f" },
        type: "light"
    },
    themeName: "Blue Lagoon 2020",
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
    const toggleDarkMode = () => {
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
        console.log("updated");
        console.log(updatedTheme);
    };
    return [theme, toggleDarkMode];
};

const App = () => {
    const [theme, toggleDarkMode] = useDarkMode();
    console.log(theme);
    const themeConfig = createMuiTheme(theme as ThemeOptions);
    console.log(themeConfig);
    const sheetsManager = new Map();

    const [themes, setThemes] = useState<string>(themeConfig.palette.type);

    React.useEffect(() => {
        setThemes(themeConfig.palette.type);
    }, [themeConfig]);
    return (
        <React.Fragment>
            <MuiThemeProvider theme={themeConfig} sheetsManager={sheetsManager}>
                <AppBar toggleDarkMode={toggleDarkMode} />
                <p>{themes}</p>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
