import { combineReducers } from "redux";
import users from "./userReducer";

const RootReducer = combineReducers({ users });

export default RootReducer;
