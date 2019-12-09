export const ACTION_TYPES = {
  STUDENT_FORM_POST_SUCCESS: "STUDENT_FORM_POST_SUCCESS",
  STUDENT_FORM_POST_ERROR: "STUDENT_FORM_POST_ERROR",
  STUDENT_FORM_GET_SUCCESS: "STUDENT_FORM_GET_SUCCESS",
  STUDENT_FORM_GET_ERROR: "STUDENT_FORM_GET_ERROR",
};

// Action creator for successful student application submission
export const setStudentPostSuccess = () => {
  return {
    type: ACTION_TYPES.STUDENT_FORM_POST_SUCCESS
  };
};

// Action creator if error occurs in student application submission
export const setStudentPostError = error => {
  return {
    type: ACTION_TYPES.STUDENT_FORM_POST_ERROR,
    payload: error
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
  console.log(res);
  if (res.status === 201) {
    dispatch(setStudentPostSuccess());
  } else {
    dispatch(setStudentPostError(res.error));
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
  const res = await fetch(`/applications/students/${formID}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(res);
  if (res.status === 200) {
    dispatch(getStudentFormSuccess(res.data));
  } else {
    dispatch(getStudentFormError(res.error));
  }
};