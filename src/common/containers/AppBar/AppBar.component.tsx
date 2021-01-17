import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles,
    FormControlLabel,
    Switch
} from "@material-ui/core";

import NavLinkButton from "common/components/NavLinkButton/NavLinkButton.component";
import style from "./AppBar.style";

interface AppBarProps {
    toggleDarkMode: () => void;
    classes: any;
}

const AppBar = (props: AppBarProps) => {
    const { classes } = props;

    return (
        <React.Fragment>
            <BaseAppBar position="static" className={classes.navContainer}>
                <Toolbar>
                    <Grid container className={classes.gridContainer}>
                        <Grid
                            item
                            className={classes.homeButtonContainer}
                            xs={6}
                            sm={3}
                            md={2}
                        >
                            <NavLinkButton
                                className={classes.menuButton}
                                variant="contained"
                                to="/"
                                color="secondary"
                            >
                                {/* <img
                                        src={img}
                                        width="200px"
                                        height="70px"
                                    /> */}
                                <Typography color="textSecondary">
                                    temp
                                </Typography>
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
        </React.Fragment>
    );
};

export default withStyles(style)(AppBar);
