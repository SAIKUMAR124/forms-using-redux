import { combineReducers } from "redux";
import formReducer from "./user/userReducer";

const RootReducer = combineReducers({
    users: formReducer,
})

export default RootReducer;