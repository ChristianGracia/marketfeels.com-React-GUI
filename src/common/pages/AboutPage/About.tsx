import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./AboutPage.style";
import { Store } from "redux";

interface AboutProps {
    classes: any;
}

const About = (props: AboutProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.aboutContainer}>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
            </Paper>
            <Typography>About page</Typography>
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
)(withStyles(style)(About));
