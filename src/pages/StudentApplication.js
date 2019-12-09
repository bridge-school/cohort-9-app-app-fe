import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {Header, Message} from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import { fetchAppById } from "../redux/actions/cohortAppActions";
import { postStudentFormDetails} from "../redux/actions/studentFormActions";
import { Redirect } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

const StudentApplication = ({app, getApplicationById, postStudentFormDetails, formPostSuccess, formPostError}) => {
  const pageTitle="Apply For Bridge"
  const cohortId = useParams().id
  const cohortData = app;
  console.log(cohortData)
  const [submitted, setSubmitted] = useState(null)

  useEffect(() => {
    document.title = pageTitle
    getApplicationById(cohortId)
  }, [formPostError, formPostSuccess, getApplicationById, cohortId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is placeholder data, later need to make sure
    // that all form input values get submitted
    const exampleFormData = {
      firstName: "Bob",
      lastName: "Pipa"
    };
    postStudentFormDetails(exampleFormData)
    setSubmitted(true)
  };
  if (submitted && formPostSuccess === true) {
    return <Redirect to={`/student/confirmation/${cohortId}`} />;
  } 
  return (
    <div>
      <Header as='h1'>{pageTitle}</Header>
      <form onSubmit={handleSubmit}>
        <p>Student form fields will go here...</p>
        <SubmitButton>Apply for Bridge</SubmitButton>
      </form>
      {submitted === true && formPostError === true? 
        <Message error>
          <i className="close icon"></i>
          <Header as="h3">
            There was an error with your submission. Please try again.
          </Header>
        </Message>
      : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  postStudentFormDetails: () => dispatch(postStudentFormDetails()),
  getApplicationById: (id) => dispatch(fetchAppById(id))
});

const mapStateToProps = state => {
  return {
    app: state.app.cohort.cohort,
    formPostSuccess: state.studentForm.formPostSuccess,
    formPostError: state.studentForm.formPostError
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentApplication);
