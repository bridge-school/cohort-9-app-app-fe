import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import adminFormReducer from "./adminFormReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer
});

export default rootReducer;
