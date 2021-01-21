import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./AllStocksPage.style";
import { Store } from "redux";

interface AllStocksProps {
    classes: any;
}

const AllStocks = (props: AllStocksProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.allStocksContainer}></Paper>
            <Typography>AllStocks page</Typography>
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
)(withStyles(style)(AllStocks));
