import { ACTION_TYPES } from "../actions/dateActions";
export const INITIAL_STATE = {
  datesOpen: "",
  datesClose: "",
  datesOfResponse: ""
};

const datesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DATES:
      return {
        ...state,
        [action.payload.dateField]: action.payload.date
      };
    default:
      return state;
  }
};
export default datesReducer;
