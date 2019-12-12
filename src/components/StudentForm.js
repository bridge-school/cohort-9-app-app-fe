import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Form, Input } from "semantic-ui-react";
import {Header, Message, Button, Grid} from 'semantic-ui-react'
import StudentQuestion from "./StudentQuestion";
import {
  setStudentName,
  setStudentEmail,
  // getStudentFormQuestions,
  setQuestionError,
  postStudentSubmission
} from "../redux/actions/studentSubmissionActions";
import {getCohortApplicationById}  from "../redux/actions/getCohortApplicationByIdActions";
import styled from 'styled-components';
// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below

const Container = styled.div`
  margin: 1rem 0;
`
const StudentForm = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const formID = useParams().id
  const {getStudentFormQuestions} = props;
  const {formPostError} = props;

  useEffect(() => {
    // make request to get question data for this form
    if (formID === "") {
      console.error("Unable to get ID from url")
    } 
    getStudentFormQuestions(formID);
  }, [formID, getStudentFormQuestions]);


  useEffect(() => {
    // rerender to show error message if formposterror is not null
    if (formPostError !== null) {
      console.log(formPostError)
    } 
  },[formPostError]);

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
      email: props.studentEmail,
      name: props.studentName,
      responses: questionsWithResponses,
    }
    // submitData
    props.postStudentFormDetails(formData);
    setSubmitted(true);
  }

  if (!props.getCohortApplicationSuccess) {
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
    <>
      <Header as="h2">{props.cohortApplicationReceived.cohortName}</Header>
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
            <Container>
              <StudentQuestion
                key={question.timestampForKey}
                questionData={question}
              />
            </Container>
          );
        })}

        <Grid centered columns={2} padded>
          <Grid.Column>
            <Button fluid color="teal" size='huge'>Apply for Bridge</Button>
          </Grid.Column>
        </Grid>

        {submitted === true && formPostError !== null ?
          <Message negative>
            <Header as="h3">
              There was an error with your submission: {formPostError}
            </Header>
            <p>Please try again.</p>
          </Message>
          : null
        }
      </Form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    getCohortApplicationSuccess: state.cohortApplication.getCohortApplicationSuccess,
    getCohortApplicationError: state.cohortApplication.getCohortApplicationError,
    cohortApplicationReceived: state.cohortApplication.cohortApplicationReceived,
    questionsReceived: state.cohortApplication.questionsReceived,
    questionsValues: state.studentSubmission.questionsValues,
    questionsErrors: state.studentSubmission.questionsErrors,
    studentName: state.studentSubmission.studentName,
    studentEmail: state.studentSubmission.studentEmail,
    formPostSuccess: state.studentSubmission.formPostSuccess,
    formPostError: state.studentSubmission.formPostError
  };
};

const mapDispatchToProps = dispatch => ({
  getStudentFormQuestions: formID => dispatch(getCohortApplicationById(formID)),
  setQuestionError: (index, error) => dispatch(setQuestionError(index, error)),
  postStudentFormDetails: formData => dispatch(postStudentSubmission(formData)),
  setStudentName: name => dispatch(setStudentName(name)),
  setStudentEmail: email => dispatch(setStudentEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);