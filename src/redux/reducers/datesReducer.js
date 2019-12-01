import { ACTION_TYPES } from "../actions/dateActions";
export const INITIAL_STATE = {
  dateOpen: "",
  dateClose: "",
  dateOfResponse: ""
};

const datesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    //based on the action type update the paylod
    case ACTION_TYPES.SET_DATES:
      return {
        ...state,
        //payload is an object
        [action.payload.dateField]: action.payload.date
      };
    //if reste dates is called then return the original state
    case ACTION_TYPES.RESET_DATES:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
export default datesReducer;
