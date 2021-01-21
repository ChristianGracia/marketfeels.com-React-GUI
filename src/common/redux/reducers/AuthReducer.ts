import {
    loginAttempt,
    loginSuccess,
    loginError,
    setUserAction
} from "../actions/AuthActions";

import { createReducer } from "@reduxjs/toolkit";
import { User } from "common/types/User";

interface State {
    loginAttempt: boolean;
    loginSuccess: boolean;
    loginError: boolean;
    loginErrorMessage: string;
    user?: User;
}

const INITIAL: State = {
    loginAttempt: false,
    loginSuccess: false,
    loginError: false,
    loginErrorMessage: "",
    user: undefined
};

const AuthReducer = createReducer(INITIAL, {
    [loginAttempt.type]: (state) => {
        return {
            ...state,
            loginAttempt: true,
            loginSuccess: false,
            loginError: false
        };
    },
    [loginSuccess.type]: (state, action) => {
        return {
            ...state,
            loginSuccess: true,
            loginAttempt: false,
            loginError: false,
            user: action.payload
        };
    },
    [loginError.type]: (state, action) => {
        return {
            ...state,
            loginError: true,
            loginErrorMessage: action.payload,
            loginAttempt: false,
            loginSuccess: false
        };
    },
    [setUserAction.type]: (state, action) => {
        return {
            ...state,
            user: action.payload
        };
    }
});

export default AuthReducer;
