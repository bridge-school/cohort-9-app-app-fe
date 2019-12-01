import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import {fetchAppsReducer} from "./fetchApps";
import adminFormReducer from "./adminFormReducer";
import studentFormReducer from "./studentFormReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  apps: fetchAppsReducer,
  studentForm: studentFormReducer
});

export default rootReducer;
