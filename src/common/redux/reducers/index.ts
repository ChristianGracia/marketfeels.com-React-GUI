import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const appReducer = combineReducers({ AuthReducer });

const rootReducer = (state: any, action: any) => {
    // if (action.type === logoutUser.type) {
    //     state = undefined;
    // }
    return appReducer(state, action);
};

export default rootReducer;
