import { createStyles, Theme } from "@material-ui/core";

const style = (theme: Theme) =>
    createStyles({
        gridContainer: {
            display: "flex",
            justifyContent: "evenly",
            alignItems: "center"
        },

        menuLogoContainer: {
            display: "flex",
            justifyContent: "space-between"
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
        },
        listSubheaderText: {
            fontWeight: "bold",
            fontSize: 17
        },
        firstList: {
            marginTop: 20
        }
    });

export default style;
