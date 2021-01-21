import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./HomePage.style";
import { Store } from "redux";

interface HomeProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const Home = (props: HomeProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.homeContainer}>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
            </Paper>
            <Typography>Home page</Typography>
        </React.Fragment>
    );
};

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(style)(Home));
