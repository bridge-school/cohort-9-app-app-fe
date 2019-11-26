import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import { adminDashboardReducer } from "./adminDashboardReducer";
import adminFormReducer from "./adminFormReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  apps: adminDashboardReducer
});

export default rootReducer;
