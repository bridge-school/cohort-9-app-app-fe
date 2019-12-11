export const ACTION_TYPES = {
  STUDENT_FORM_POST_SUCCESS: "STUDENT_FORM_POST_SUCCESS",
  STUDENT_FORM_POST_ERROR: "STUDENT_FORM_POST_ERROR",
  STUDENT_FORM_GET_SUCCESS: "STUDENT_FORM_GET_SUCCESS",
  STUDENT_FORM_GET_ERROR: "STUDENT_FORM_GET_ERROR",
  SET_STUDENT_NAME: "SET_STUDENT_NAME",
  SET_STUDENT_EMAIL: "SET_STUDENT_EMAIL",
  SET_QUESTION_VALUE: "SET_QUESTION_VALUE",
  SET_QUESTION_ERROR: "SET_QUESTION_ERROR",
  RESET_QUESTION_ERROR: "RESET_QUESTION_ERROR",
};

// Action creator for setting student name
export const setStudentName = (name) => {
  return {
    type: ACTION_TYPES.SET_STUDENT_NAME,
    payload: name
  };
};

// Action creator for setting student email
export const setStudentEmail = (email) => {
  return {
    type: ACTION_TYPES.SET_STUDENT_EMAIL,
    payload: email
  };
};

// Action creator for setting input value in student application submission
export const setQuestionValue = (index, value) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_VALUE,
    payload: {
      value,
      index
    }
  };
};

// Action creator for validation errors
export const setQuestionError = (index, error) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_ERROR,
    payload: {
      error,
      index
    }
  };
};

// Action creator for re-seting errors, once student 
// starts typing in the required field
export const resetQuestionError = index => {
  return {
    type: ACTION_TYPES.RESET_QUESTION_ERROR,
    payload: index
  };
};

// Action creator for successful student application submission
export const setStudentPostSuccess = () => {
  return {
    type: ACTION_TYPES.STUDENT_FORM_POST_SUCCESS
  };
};

// Action creator if error occurs in student application submission
export const setStudentPostError = postError => {
  return {
    type: ACTION_TYPES.STUDENT_FORM_POST_ERROR,
    payload: postError
  };
};

//creating Thunk to post the details of the student submission form to firebase
export const postStudentFormDetails = formData => async dispatch => {
  const res = await fetch("/applications/students", {
    method: "post",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (res.status === 201) {
    dispatch(setStudentPostSuccess());
  } else {
    dispatch(setStudentPostError(res.statusText));
  }
};


// Action creator for successful student application submission
export const getStudentFormSuccess = (studentFormData) => {
  return {
    type: ACTION_TYPES.STUDENT_FORM_GET_SUCCESS, 
    payload: studentFormData
  };
};

// Action creator if error occurs in student application submission
export const getStudentFormError = error => {
  return {
    type: ACTION_TYPES.STUDENT_FORM_GET_ERROR,
    payload: error
  };
};

//creating Thunk to get the questions for the student form from firebase
export const getStudentFormQuestions = formID => async dispatch => {
  const res = await fetch(`/applications/${formID}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  const formData = data.cohort[0];

  if (res.status === 200) {
    console.log(formData)
    dispatch(getStudentFormSuccess(formData));
  } else {
    dispatch(getStudentFormError("Unable to get application form by ID"));
  }
};