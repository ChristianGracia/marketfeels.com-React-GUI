import { createAction } from "@reduxjs/toolkit";
import { User } from "common/types/User";

const loginAttempt = createAction("login/attempt");
const loginError = createAction("login/error");
const loginSuccess = createAction("login/success");

const setUserAction = createAction<User>("setUser");
const setUser = (user: User) => (dispatch: any) => {
    // const user = new User(id, "c");
    dispatch(setUserAction(user));
};

const login = (email: string, password: string) => (dispatch: any) => {
    console.log("hi");
    dispatch(loginAttempt());

    dispatch(loginSuccess());

    // dispatch(loginError("Error logging in"));

    // AuthenticationService.login(email, password)
    //     .then((response: any) => {
    //         const token = response.data.authorization.token;
    //     })
    //     .catch((err: any) => {
    //         console.log({ err });
    //     });
};

const getUser = (id: string) => (dispatch: any) => {
    const user = new User(id, "c");
    dispatch(setUser(user));
};

const logoutUser = createAction("logout");

const logout = () => (dispatch: any) => {
    dispatch(logoutUser());
};

export {
    login,
    loginAttempt,
    loginError,
    loginSuccess,
    logout,
    logoutUser,
    setUser,
    setUserAction,
    getUser
};
