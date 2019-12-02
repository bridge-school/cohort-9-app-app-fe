export const ACTION_TYPES = {
  SET_COHORT_NAME: "SET_COHORT_NAME",
  SET_COHORT_TYPE: "SET_COHORT_TYPE",
  SET_POST_SUCCESS: "SET_POST_SUCCESS",
  SET_POST_ERROR: "SET_POST_ERROR",
  SET_RESET_APP: "SET_RESET_APP",
  RESET_IS_SUBMITTED: "RESET_IS_SUBMITTED",
  ADD_NEW_QUESTION: "ADD_NEW_QUESTION",
  SET_QUESTION_PROMPT: "SET_QUESTION_PROMPT",
  SET_QUESTION_TYPE: "SET_QUESTION_TYPE",
  SET_QUESTION_REQUIRED: "SET_QUESTION_REQUIRED",
  QUESTION_OPTIONS: "QUESTION_OPTIONS",
  DELETE_QUESTION: "DELETE_QUESTION"
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

// Action creator for when a new question is generated
export const addNewQuestion = () => {
  return {
    type: ACTION_TYPES.ADD_NEW_QUESTION
  };
};

// Action creators for Question fields
export const setQuestionPrompt = (questionIndex, propmtText) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_PROMPT,
    payload: {
      index: questionIndex,
      questionPrompt: propmtText
    }
  };
};

export const setQuestionType = (questionIndex, questionType) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_TYPE,
    payload: {
      index: questionIndex,
      questionType
    }
  };
};

export const setQuestionRequired = (questionIndex, isRequired) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_REQUIRED,
    payload: {
      index: questionIndex,
      isRequired
    }
  };
};

export const setQuestionOptions = (questionIndex, optionsString) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_OPTIONS,
    payload: {
      index: questionIndex,
      questionOptions: optionsString
    }
  };
};

export const deleteQuestion = (questionIndex) => {
  return {
    type: ACTION_TYPES.DELETE_QUESTION,
    payload: {
      index: questionIndex
    }
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
