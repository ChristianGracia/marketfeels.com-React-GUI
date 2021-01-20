import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
    createStyles({
        logoContainer: {
            // marginTop: 8,
            display: "flex",
            justifyContent: "evenly",
            alignItems: "center"
        },

        hamburgerMenu: {
            display: "flex",
            justifyContent: "space-around"

            // [theme.breakpoints.up("sm")]: {
            //     display: "none"
            // }
        },
        siteLogo: {
            display: "flex",
            justifyContent: "flex-end"
        },
        homeButtonContainer: {},
        menuButton: { padding: 0 },

        navContainer: {
            background: "transparent",
            boxShadow: "none"
        },
        socialMediaContainer: {},
        menuButtonContainer: {
            marginRight: 4
        },
        menuButtonsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        }
    });

export default style;
