const SET_APPS = "SET_APPS"
const SET_IS_LOADING = "SET_IS_LOADING"

export const INITIAL_STATE = {
  apps: [],
  isLoading: true
};
    
// TODO: Write the reducer cases for API list
export const fetchAppsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_APPS:
      return {
        ...state,
        apps: action.payload
      };
    default: {
      return state;
    }
  }
};
