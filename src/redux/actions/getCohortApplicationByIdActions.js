import { request } from "../../backend-request";

export const ACTION_TYPES = {
    COHORT_APP_GET_SUCCESS: "COHORT_FORM_GET_SUCCESS",
    COHORT_APP_GET_ERROR: "COHORT_FORM_GET_ERROR",
  };
  
  // Action creator for successful cohort application fetch
export const getCohortApplicationSuccess = (formData) => {
    return {
      type: ACTION_TYPES.COHORT_APP_GET_SUCCESS, 
      payload: formData
    };
  };
  
  // Action creator if error occurs in cohort application fetch
  export const getCohortApplicationError = error => {
    return {
      type: ACTION_TYPES.COHORT_APP_GET_ERROR,
      payload: error
    };
  };
  
  //creating Thunk to get the cohort application data in firebase
  export const getCohortApplicationById = id => async dispatch => {
    const res = await request(`applications/${id}`);
    const data = await res.json();
    const formData = data.cohort[0];
    if (res.status === 200) {
      dispatch(getCohortApplicationSuccess(formData));
    } else {
      dispatch(getCohortApplicationError(`${res.status}: Unable to get application form by ID`));
    }
  };