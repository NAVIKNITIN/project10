import { combineReducers } from "redux";
import notereducer from "../reducers/switchcase";

const reducers = combineReducers({notes:notereducer});
export default reducers;
