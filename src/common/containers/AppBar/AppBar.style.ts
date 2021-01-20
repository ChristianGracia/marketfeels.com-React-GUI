import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
    createStyles({
        gridContainer: {
            // marginTop: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        siteLogoContainer: {
            margin: "0 auto"
            // [theme.breakpoints.down("xs")]: {
            //     display: "none"
            // }
        },
        hamburgerMenu: {
            display: "flex",
            justifyContent: "left",
            marginTop: 10
            // [theme.breakpoints.up("sm")]: {
            //     display: "none"
            // }
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
            flexDirection: "row"
        }
    });

export default style;
