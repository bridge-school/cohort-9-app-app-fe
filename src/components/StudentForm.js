import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Form, Input } from "semantic-ui-react";
import {Header, Message, Button, Grid} from 'semantic-ui-react'
import StudentQuestion from "./StudentQuestion";
import {
  setStudentName,
  setStudentEmail,
  getStudentFormQuestions,
  setQuestionError,
  postStudentFormDetails
} from "../redux/actions/studentFormActions";



// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below
const StudentForm = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const formID = useParams().id
  
  useEffect(() => {
    // make request to get question data for this form
    if (formID === "") {
      console.error("Unable to get ID from url")
    } 
    props.getStudentFormQuestions(formID);
  }, []);

  useEffect(() => {
    // rerender to show error message if formposterror is not null
    if (props.formPostError !== null) {
      console.log(props.formPostError)
    } 
  },[props.formPostError]);

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
    setSubmitted(true);
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
  
  // if post on submit successful, redirect to confirmation page
  if (submitted && props.formPostSuccess) {
      return <Redirect to={`/student/confirmation/${formID}`}/>;
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

      <Grid centered columns={2}>
        <Grid.Column>
          <Button fluid color="teal" size='huge'>Apply for Bridge</Button>
        </Grid.Column>
      </Grid>

      {submitted === true && props.formPostError !== null ?
          <Message negative>
            <Header as="h3">
              There was an error with your submission: {props.formPostError}
            </Header>
            <p>Please try again.</p>
          </Message>
         : null
      }
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    studentFormGetSuccess: state.studentForm.studentFormGetSuccess,
    getStudentFormError: state.studentForm.getStudentFormError,
    studentName: state.studentForm.studentName,
    studentEmail: state.studentForm.studentEmail,
    questionsReceived: state.studentForm.questionsReceived,
    questionsValues: state.studentForm.questionsValues,
    questionsErrors: state.studentForm.questionsErrors,
    formPostSuccess: state.studentForm.formPostSuccess,
    formPostError: state.studentForm.formPostError
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);