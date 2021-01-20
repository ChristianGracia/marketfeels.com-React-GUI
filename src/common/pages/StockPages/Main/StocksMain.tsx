import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./StocksMainPage.style";

interface StocksMainProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const StocksMain = (props: StocksMainProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.stocksMainContainer}></Paper>
            <Typography>StocksMain page</Typography>
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
)(withStyles(style)(StocksMain));
