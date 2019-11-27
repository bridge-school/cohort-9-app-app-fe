export const ACTION_TYPES = {
  SET_COHORT_NAME: "SET_COHORT_NAME",
  SET_COHORT_TYPE: "SET_COHORT_TYPE"
}

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