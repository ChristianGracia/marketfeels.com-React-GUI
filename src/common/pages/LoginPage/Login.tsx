import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./LoginPage.style";

interface LoginProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const Login = (props: LoginProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.loginContainer}></Paper>
            <Typography>Login page</Typography>
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
)(withStyles(style)(Login));
