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
