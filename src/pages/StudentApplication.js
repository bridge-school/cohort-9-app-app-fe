import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {Header, Message} from 'semantic-ui-react'
import { useHistory, useParams } from "react-router-dom";
import { filterFormData } from "../helperFunctions/helpers.js"
import { postStudentFormDetails} from "../redux/actions/studentFormActions";

import SubmitButton from "../components/SubmitButton";



const StudentApplication = ({apps, postStudentFormDetails, isSubmitted}) => {
  const cohortId = useParams().id
  const filteredData = filterFormData(apps, cohortId)
  console.log(filteredData)
  const history = useHistory();
  const pageTitle="Apply For Bridge"
  const [error, setError] = useState(false);
  useEffect(() => {
    document.title = pageTitle
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // this is placeholder data, later need to make sure
    // that all form input values get submitted
    const exampleFormData = {
      firstName: "Bob",
      lastName: "Pipa"
    };

    postStudentFormDetails(exampleFormData)
      .then(() => {
        // on success of form submission re-direct to confirmation page
        // on failure of form submission alert user
        console.log(isSubmitted)
        isSubmitted === true ? 
          history.push(`/student/confirmation/${cohortId}`)
        : setError(true);
      });

  };

  return (
    <div>
      <Header as='h1'>{pageTitle}</Header>
      <form onSubmit={handleSubmit}>
        <p>Student form fields will go here...</p>
        <SubmitButton>Apply for Bridge</SubmitButton>
      </form>

      {error === true? 
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

const mapDispatchToProps = {
  postStudentFormDetails
};

const mapStateToProps = state => ({
  apps: state.apps.apps.cohort_apps,
  isSubmitted: state.studentForm.formPostSuccess
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentApplication);
