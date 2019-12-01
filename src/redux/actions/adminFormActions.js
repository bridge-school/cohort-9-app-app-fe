export const ACTION_TYPES = {
  SET_COHORT_NAME: "SET_COHORT_NAME",
  SET_COHORT_TYPE: "SET_COHORT_TYPE",
  SET_POST_SUCCESS: "SET_POST_SUCCESS",
  SET_POST_ERROR: "SET_POST_ERROR",
  SET_RESET_APP: "SET_RESET_APP",
  RESET_IS_SUBMITTED: "RESET_IS_SUBMITTED"
};

// Action creator to set cohort name
export const setCohortName = cohortName => {
  return {
    type: ACTION_TYPES.SET_COHORT_NAME,
    payload: cohortName
  };
};

// Action creator to set cohort type
export const setCohortType = cohortType => {
  return {
    type: ACTION_TYPES.SET_COHORT_TYPE,
    payload: cohortType
  };
};

// Action creator to set successful
export const setPostSuccess = () => {
  return {
    type: ACTION_TYPES.SET_POST_SUCCESS
  };
};

// Action creator to set error state
export const setPostError = error => {
  return {
    type: ACTION_TYPES.SET_POST_ERROR,
    payload: error
  };
};

// Action creator to reset the state
export const setResetApp = () => {
  return {
    type: ACTION_TYPES.SET_RESET_APP
  };
};

export const resetIsSubmitted = () => {
  return {
    type: ACTION_TYPES.RESET_IS_SUBMITTED
  };
};

//creating Thunk to post the details of the form to firebase
export const postFormDetailsThunk = cohortData => async dispatch => {
  const res = await fetch("/applications", {
    method: "post",
    body: JSON.stringify(cohortData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (res.status === 201) {
    dispatch(setPostSuccess());
  } else {
    dispatch(setPostError(res.error));
  }
};
