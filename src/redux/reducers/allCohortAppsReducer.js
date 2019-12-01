import { ACTION_TYPES } from "../actions/allCohortAppsActions";

export const INITIAL_STATE = {
  apps: {
    cohort_apps: []
  },
  isLoading: true
};

// TODO: Write the reducer cases for API list
export const allCohortAppsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case ACTION_TYPES.SET_APPS:
      return {
        ...state,
        apps: action.payload
      };
    default: {
      return state;
    }
  }
};
