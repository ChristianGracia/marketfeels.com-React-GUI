import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles,
    FormControlLabel,
    Switch,
    Paper
} from "@material-ui/core";

import NavLinkButton from "common/components/NavLinkButton/NavLinkButton.component";
import style from "./AppBar.style";
import SVG from "react-inlinesvg";
import logo from "../../../assets/MarketFeels.svg";
import hamburger from "../../../assets/hamburger.svg";

interface AppBarProps {
    toggleDarkMode: any;
    classes: any;
}

const AppBar = (props: AppBarProps) => {
    const { classes } = props;

    return (
        <Paper square>
            <BaseAppBar position="static" className={classes.navContainer}>
                <div className={classes.siteLogoContainer}>
                    <SVG src={logo} width={600} height="auto" />
                </div>

                <Toolbar>
                    <Grid container className={classes.gridContainer}>
                        <Grid
                            item
                            className={classes.homeButtonContainer}
                            xs={6}
                            sm={3}
                            md={2}
                        >
                            <SVG src={hamburger} width={24} height="auto" />
                            {/* <img src={Image} width="200px" height="70px" /> */}
                            <NavLinkButton
                                className={classes.menuButton}
                                variant="contained"
                                to="/"
                                color="secondary"
                            >
                                {/* <Typography color="textSecondary">
                                    temp
                                </Typography> */}
                            </NavLinkButton>
                        </Grid>
                        <Grid item className={classes.menuButtonsContainer}>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/"
                                >
                                    <Typography>Stocks</Typography>
                                </NavLinkButton>
                            </Grid>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/"
                                >
                                    <Typography>Crypto</Typography>
                                </NavLinkButton>
                            </Grid>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/"
                                >
                                    <Typography>About</Typography>
                                </NavLinkButton>
                            </Grid>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/"
                                >
                                    <Typography>Contact</Typography>
                                </NavLinkButton>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.socialMediaContainer}>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/"
                                >
                                    <FormControlLabel
                                        label="dark mode"
                                        control={
                                            <Switch
                                                onClick={props.toggleDarkMode}
                                            />
                                        }
                                    ></FormControlLabel>
                                </NavLinkButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </BaseAppBar>
        </Paper>
    );
};

export default withStyles(style)(AppBar);
