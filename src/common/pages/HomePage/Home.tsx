import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./HomePage.style";

interface HomeProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const Home = (props: HomeProps) => {
    const { classes } = props;
    return (
        <div className={classes.homeContainer}>
            <Paper>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
            </Paper>
            <Typography>Home page</Typography>
        </div>
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
