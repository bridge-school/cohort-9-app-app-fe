import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
const rootReducer = combineReducers({
  dates: datesReducer
});
export default rootReducer;
