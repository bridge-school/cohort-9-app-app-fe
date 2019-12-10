import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
  getStudentFormQuestions,
  setQuestionError
} from "../redux/actions/studentFormActions";

import { Button, Checkbox, Form, Input} from "semantic-ui-react";
import SubmitButton from "./SubmitButton";
import StudentQuestion from "./StudentQuestion";

// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below
const StudentForm = (props) => {
  useEffect(() => {
    // make request to get question data for this form
    props.getStudentFormQuestions();
  }, []);

  // handle submit - has access to all values of inputs
  const submitStudentData = (e) => {
    e.preventDefault();
    const data = props.questionsReceived;
    const values = props.questionsErrors;
    let anyError = false;

    data.forEach((q, index) => {
      const val = values[index];
      if (val === "" && q.isRequired) {
        props.setQuestionError(index, "This is a required field");
        anyError = true;
      }
    })
    // if there are any errors return early
    if (anyError) {
      return;
    }
    // submitData

  }

  if (!props.studentFormGetSuccess) {
    return <h2>Loading...</h2>;
  }

  const values = props.questionsValues;

  return (
    <Form onSubmit={submitStudentData}>
      <Form.Group widths="equal">
        <Form.Field
          required
          control={Input}
          label="Full name"
          placeholder="Full name"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input label="Email" placeholder="Email" type="email" required />
      </Form.Group>

      {props.questionsReceived.map((question, index) => {
        // we add index information to the question object
        // so that we can use it inside each StudentQuestion
        question.index = index;

        return (
          <StudentQuestion
            key={question.timestampForKey}
            questionData={question}
          />
        );
      })}

      <SubmitButton>Apply for Bridge</SubmitButton>
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    studentFormGetSuccess: state.studentForm.studentFormGetSuccess,
    studentFormGetError: state.studentForm.studentFormGetError,
    questionsReceived: state.studentForm.questionsReceived,
    questionsValues: state.studentForm.questionsValues,
    questionsErrors: state.studentForm.questionsErrors,
  };
};

const mapDispatchToProps = dispatch => ({
  getStudentFormQuestions: formID => dispatch(getStudentFormQuestions(formID)),
  setQuestionError: (index, error) => dispatch(setQuestionError(index, error))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);