export const ACTION_TYPES = {
  STUDENT_FORM_POST_SUCCESS: "STUDENT_FORM_POST_SUCCESS",
  STUDENT_FORM_POST_ERROR: "STUDENT_FORM_POST_ERROR"
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