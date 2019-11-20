export const SET_COHORT_NAME = "SET_COHORT_NAME";
export const SET_COHORT_TYPE = "SET_COHORT_TYPE";

//Action creators
export const setCohortName = cohortName => {
  return {
    type: SET_COHORT_NAME,
    payload: cohortName
  };
};

export const setCohortType = cohortType => {
  return {
    type: SET_COHORT_TYPE,
    payload: cohortType
  };
};