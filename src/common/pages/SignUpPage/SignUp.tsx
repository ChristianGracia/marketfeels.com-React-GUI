import * as React from "react";
import { connect } from "react-redux";

import {
    Typography,
    Paper,
    Button,
    withStyles,
    TextField,
    Grid,
    InputAdornment,
    FormControl,
    InputLabel,
    Input,
    IconButton
} from "@material-ui/core";

import style from "./SignUpPage.style";

import user from "../../../assets/user.svg";
import eye from "../../../assets/eye.svg";
import eyeSlashed from "../../../assets/eye-slashed.svg";

import SVG from "react-inlinesvg";
import { Store } from "redux";

interface SignUpProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const SignUp = (props: SignUpProps) => {
    const { classes } = props;

    const [values, setValues] = React.useState({
        username: "",
        password: "",
        showPassword: false
    });

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        const credentials = {
            user: values["username"],
            password: values["password"]
        };
        console.log(credentials);
    };
    return (
        <React.Fragment>
            <div className={classes.signupContainer}>
                <Typography variant="h3">Account Signup</Typography>
                <FormControl className={classes.formField}>
                    <InputLabel htmlFor="user">Username</InputLabel>
                    <Input
                        id="user"
                        type={"text"}
                        value={values.username}
                        onChange={handleChange("username")}
                    />
                </FormControl>
                <FormControl className={classes.formField}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? (
                                        <SVG
                                            src={eye}
                                            width={24}
                                            height="auto"
                                        />
                                    ) : (
                                        <SVG
                                            src={eyeSlashed}
                                            width={24}
                                            height="auto"
                                        />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
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
