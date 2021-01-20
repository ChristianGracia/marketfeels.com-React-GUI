import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./SignUpPage.style";

interface SignUpProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const SignUp = (props: SignUpProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.signupContainer}></Paper>
            <Typography>SignUp page</Typography>
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
)(withStyles(style)(SignUp));
