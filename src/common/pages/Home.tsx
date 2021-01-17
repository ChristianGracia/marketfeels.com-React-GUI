import * as React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

import { Store } from "common/redux/store";

interface HomeProps {
    title: string;
    updateTitle: any;
}

const Home = (props: HomeProps) => {
    return (
        <React.Fragment>
            <Typography>Home page</Typography>
        </React.Fragment>
    );
};

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
