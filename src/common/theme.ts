// import { createMuiTheme } from "@material-ui/core";
// import { useState } from "react";

// const themeObject = createMuiTheme({
//     palette: {
//         primary: {
//             main: "#fff",
//             light: "#2D77A9",
//             dark: "#998899",
//             contrastText: "#212121"
//         },
//         secondary: {
//             main: "#7986cb",
//             light: "#aab6fe",
//             dark: "#998899 ",
//             contrastText: "#fafafa"
//         },
//         type: "light"
//     }
// });

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

// export default theme;

export const lightTheme = {
    body: "#E2E2E2",
    text: "#363537",
    toggleBorder: "#FFF",
    gradient: "linear-gradient(#39598A, #79D7ED)"
};

export const darkTheme = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)"
};
