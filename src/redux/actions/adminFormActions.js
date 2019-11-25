export const ACTION_TYPES = {
  SET_COHORT_NAME: "SET_COHORT_NAME",
  SET_COHORT_TYPE: "SET_COHORT_TYPE",
  SET_FORM_DETAILS: "SET_FORM_DETAILS"
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

// Action creator to set form details in firebase
export const setFormDetails = (cohortName, cohortType) => {
  return {
    type: ACTION_TYPES.SET_FORM_DETAILS,
    payload: { cohortName: cohortName, cohortType: cohortType }
  };
};

//creating Thunk to post the details of the form to firebase by dispatchin setFormDetails action creator
const postFormDetailsThunk = (cohortName, cohortType) => async dispatch => {
  const cohortData = {
    cohortName: cohortName,
    cohortType: cohortType
  };
  const res = await fetch("/applications", {
    method: "post",
    body: JSON.stringify(cohortData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const apiResponse = await res.json();
  await dispatch(setFormDetails(cohortName, cohortType));
};
