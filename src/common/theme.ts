import { createMuiTheme } from "@material-ui/core";
import { useState } from "react";

const themeObject = createMuiTheme({
    palette: {
        primary: {
            main: "#fff",
            light: "#2D77A9",
            dark: "#152238",
            contrastText: "#212121"
        },
        secondary: {
            main: "#7986cb",
            light: "#aab6fe",
            dark: "#49599a",
            contrastText: "#fafafa"
        },
        type: "light"
    }
});

// export const useDarkMode = () => {
//     const [theme, setTheme] = useState(themeObject);

//     const {
//         palette: { type }
//     } = theme;

//     const toggleDarkMode = () => {
//         const updatedTheme = {
//             ...theme,
//             palette: {
//                 ...theme.palette,
//                 type: type === "light" ? "dark" : "light"
//             }
//         };
//         setTheme(updatedTheme);
//     };
//     return [theme, toggleDarkMode];
// };

export default themeObject;
