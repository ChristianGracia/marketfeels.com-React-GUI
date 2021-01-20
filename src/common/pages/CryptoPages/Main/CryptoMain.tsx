import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./CryptoMainPage.style";

interface CryptoMainProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const CryptoMain = (props: CryptoMainProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.cyptoMainContainer}></Paper>
            <Typography>CryptoMain page</Typography>
            <Typography>Coming Soon!!!!</Typography>
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
)(withStyles(style)(CryptoMain));
