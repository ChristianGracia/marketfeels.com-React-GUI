import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./CryptoMainPage.style";
import { Store } from "redux";

interface CryptoMainProps {
    classes: any;
}

const CryptoMain = (props: CryptoMainProps) => {
    const axios = require("axios");

    const backendCheck = async () => {
        const data = await fetch(
            "https://finnhub.io/api/v1/search?q=apple&token=c08ci6748v6plm1eln5g"
        );

        const filteredData = await data.json();

        console.log(filteredData);

        // fetch("http://localhost:8080/api").then((data) => console.log(data));

        // axios
        //     .get({
        //         method: "get",
        //         url: "http://localhost:8080/"
        //     })
        //     .then(
        //         (response: any) => {
        //             console.log(response.data);
        //             console.log(response);
        //             console.log("hi");
        //         },
        //         (error: any) => {
        //             console.log(error);
        //         }
        //     );
    };

    React.useEffect(() => {
        backendCheck();
    }, []);
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
