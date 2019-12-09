export const ACTION_TYPES = {
  STUDENT_FORM_POST_SUCCESS: "STUDENT_FORM_POST_SUCCESS",
  STUDENT_FORM_POST_ERROR: "STUDENT_FORM_POST_ERROR",
  STUDENT_FORM_GET_SUCCESS: "STUDENT_FORM_GET_SUCCESS",
  STUDENT_FORM_GET_ERROR: "STUDENT_FORM_GET_ERROR",
  SET_QUESTION_VALUE: "SET_QUESTION_VALUE"
};

// Action creator for successful student application submission
export const setQuestionValue = (index, value) => {
  return {
    type: ACTION_TYPES.SET_QUESTION_VALUE,
    payload: {
      value,
      index
    }
  };
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
  // TODO: uncomment when backend endpoint is connected
  /*
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
  */

  // hardcoded temporarily:
  const placeholderQuestionData = [
    {
      prompt: "Checkboxes Question......?",
      type: "checkboxes",
      isRequired: true,
      options: ["option one", "option two", "option three", "option four"],
      timestampForKey: 1575348543996
    },
    {
      prompt: "Dropdown Question...........?",
      type: "dropdown",
      isRequired: false,
      options: ["one", "two", "three", "four"],
      timestampForKey: 1575348548884
    },
    {
      prompt: "Paragraph Question...........?",
      type: "paragraph",
      isRequired: true,
      options: [],
      timestampForKey: 1575348559154
    },
    {
      prompt: "Short-Answer Question...........?",
      type: "short-answer",
      isRequired: false,
      options: [],
      timestampForKey: 1575348548888
    }
  ];

  setTimeout(() => {
    dispatch(getStudentFormSuccess(placeholderQuestionData));
  }, 500);
};