import { combineReducers } from "redux";
import counterReducer from './counter/counterReducer'
import numberReducer from "./number/numberReduce";
import userReducer from "./users/usersReducer";

const rootReducer = combineReducers({
    number :numberReducer,
    counter :counterReducer,
    usersState:userReducer
})

export default rootReducer;