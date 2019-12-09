import { ACTION_TYPES } from "../actions/cohortAppActions";

export const INITIAL_STATE = {
  cohort: [],
  isLoading: true
};

// TODO: Write the reducer cases for API list
const cohortAppReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
      case ACTION_TYPES.SET_APP:
      return {
        ...state,
        cohort: action.payload
      };
    default: {
      return state;
    }
  }
};

export default cohortAppReducer;
