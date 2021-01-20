import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles,
    FormControlLabel,
    Switch,
    Paper,
    Button,
    Drawer,
    Divider,
    List,
    Link,
    ListItem,
    ListItemIcon,
    ListSubheader,
    ListItemText
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

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: any) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.firstList}>
                <ListSubheader>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography className={classes.listSubheaderText}>
                                Stocks
                            </Typography>
                        }
                    />
                </ListSubheader>
                <ListItem>
                    <Link href="/stocks" color="inherit">
                        <ListItemText primary={"Home"} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/stocks/most-mentions" color="inherit">
                        <ListItemText primary={"Most Mentions"} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/stocks/all" color="inherit">
                        <ListItemText primary={"All Stocks"} />
                    </Link>
                </ListItem>
            </List>
            <Divider />

            <List>
                <ListSubheader>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography className={classes.listSubheaderText}>
                                Crypto
                            </Typography>
                        }
                    />
                </ListSubheader>

                <ListItem>
                    <Link href="/crypto" color="inherit">
                        <ListItemText primary={"Coming Soon..."} />
                    </Link>
                </ListItem>
            </List>
            <Divider />

            <List>
                <ListSubheader>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography className={classes.listSubheaderText}>
                                Account
                            </Typography>
                        }
                    />
                </ListSubheader>
                <ListItem>
                    <Link href="/profile" color="inherit">
                        <ListItemText primary={"Preferences"} />
                    </Link>{" "}
                </ListItem>
                <ListItem>
                    <Link href="/signup" color="inherit">
                        <ListItemText primary={"Sign Up"} />
                    </Link>{" "}
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListSubheader>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography className={classes.listSubheaderText}>
                                About
                            </Typography>
                        }
                    />
                </ListSubheader>
                <ListItem>
                    <Link href="/about" color="inherit">
                        <ListItemText primary={"About Site"} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/privacy" color="inherit">
                        <ListItemText primary={"Privacy Policy"} />
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    return (
        <Paper square>
            <BaseAppBar position="static" className={classes.navContainer}>
                <Toolbar>
                    <Grid container className={classes.gridContainer}>
                        <Grid
                            key={"left"}
                            className={classes.menuLogoContainer}
                            xl={7}
                            md={8}
                            sm={12}
                            xs={12}
                        >
                            <Button onClick={toggleDrawer("left", true)}>
                                <SVG src={hamburger} width={24} height="auto" />
                            </Button>
                            <Drawer
                                anchor={"left"}
                                open={state["left"]}
                                onClose={toggleDrawer("left", false)}
                            >
                                {list("left")}
                            </Drawer>

                            <SVG src={logo} height="100" />
                        </Grid>

                        <Grid
                            item
                            className={classes.menuButtonsContainer}
                            xl={5}
                            md={4}
                            sm={12}
                            xs={12}
                        >
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/stocks"
                                >
                                    <Typography>Stocks</Typography>
                                </NavLinkButton>
                            </Grid>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/crypto"
                                >
                                    <Typography>Crypto</Typography>
                                </NavLinkButton>
                            </Grid>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/about"
                                >
                                    <Typography>About</Typography>
                                </NavLinkButton>
                            </Grid>
                            <Grid item className={classes.menuButtonContainer}>
                                <NavLinkButton
                                    className={classes.menuButton}
                                    to="/login"
                                >
                                    <Typography>Account</Typography>
                                </NavLinkButton>
                            </Grid>
                        </Grid>
                        {/* <Grid item className={classes.socialMediaContainer}>
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
                        </Grid> */}
                    </Grid>
                </Toolbar>
            </BaseAppBar>
        </Paper>
    );
};

export default withStyles(style)(AppBar);
