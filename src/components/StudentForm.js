import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Form, Input } from "semantic-ui-react";

import {
  setStudentName,
  setStudentEmail,
  getStudentFormQuestions,
  setQuestionError,
  postStudentFormDetails,
} from "../redux/actions/studentFormActions";

import SubmitButton from "./SubmitButton";
import StudentQuestion from "./StudentQuestion";

// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below
const StudentForm = (props) => {
  const history = useHistory();

  useEffect(() => {
    // make request to get question data for this form
    const formID = props.match.params.id;
    if (formID === "") {
      console.error("Unable to get ID from url")
    } 
    props.getStudentFormQuestions(formID);
  }, []);

  useEffect(() => {
    if (props.formPostSuccess) {
      history.push("/student/confirmation");
    }
  }, [props.formPostSuccess]);

  // handle submit - has access to all values of inputs
  const submitStudentData = (e) => {
    e.preventDefault();
    const questions = props.questionsReceived;
    const values = props.questionsValues;

    // error validation before sending
    let anyError = false;
    questions.forEach((q, index) => {
      const val = values[index];
      if (val === "" && q.isRequired) {
        props.setQuestionError(index, "This is a required field");
        anyError = true;
      }
    });
    // if there are any errors return early
    if (anyError) {
      return;
    }

    const questionsWithResponses = questions.map((q, index) => {
      return {
        question: q,
        response: values[index],
      }
    });

    const formData = {
      // email
      email: props.studentEmail,
      // name
      name: props.studentName,
      // question responses
      responses: questionsWithResponses,
    }
    // submitData
    props.postStudentFormDetails(formData);
  }

  if (!props.studentFormGetSuccess) {
    return <h2>Loading...</h2>;
  }

  const handleNameChange = (e) => {
    props.setStudentName(e.target.value);
  }

  const handleEmailChange = (e) => {
    props.setStudentEmail(e.target.value);
  }

  return (
    <Form onSubmit={submitStudentData}>
      <Form.Group widths="equal">
        <Form.Field
          onChange={handleNameChange}
          required
          control={Input}
          label="Full name"
          placeholder="Full name"
          value={props.studentName}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          onChange={handleEmailChange}
          label="Email"
          placeholder="Email"
          type="email"
          required
          value={props.studentEmail}
        />
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
    studentName: state.studentForm.studentName,
    studentEmail: state.studentForm.studentEmail,
    questionsReceived: state.studentForm.questionsReceived,
    questionsValues: state.studentForm.questionsValues,
    questionsErrors: state.studentForm.questionsErrors,
    formPostSuccess: state.studentForm.formPostSuccess,
  };
};

const mapDispatchToProps = dispatch => ({
  getStudentFormQuestions: formID => dispatch(getStudentFormQuestions(formID)),
  setQuestionError: (index, error) => dispatch(setQuestionError(index, error)),
  postStudentFormDetails: formData => {
    dispatch(postStudentFormDetails(formData));
  },
  setStudentName: name => dispatch(setStudentName(name)),
  setStudentEmail: email => dispatch(setStudentEmail(email)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentForm));