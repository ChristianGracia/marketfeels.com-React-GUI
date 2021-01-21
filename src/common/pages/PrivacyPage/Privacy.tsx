import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./PrivacyPage.style";
import { Store } from "redux";

interface PrivacyProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const Privacy = (props: PrivacyProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.privacyContainer}></Paper>
            <Typography>Privacy page</Typography>
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
)(withStyles(style)(Privacy));
