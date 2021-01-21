import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./StocksMainPage.style";
import { Store } from "redux";

interface StocksMainProps {
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
