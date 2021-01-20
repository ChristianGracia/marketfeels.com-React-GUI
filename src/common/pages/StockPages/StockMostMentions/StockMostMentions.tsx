import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./StockMostMentionsPage.style";

interface StockMostMentionsProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const StockMostMentions = (props: StockMostMentionsProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.stockMostMentionsContainer}></Paper>
            <Typography>StockMostMentions page</Typography>
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
)(withStyles(style)(StockMostMentions));
