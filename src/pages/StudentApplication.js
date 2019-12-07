import React, {useEffect} from "react";
import { connect } from "react-redux";
import {Header} from 'semantic-ui-react'
import { useHistory, useParams } from "react-router-dom";

import { postStudentFormDetails } from "../redux/actions/studentFormActions";
import SubmitButton from "../components/SubmitButton";

export const filterFormData = (array, id) => array.filter(item => item.id === id);

const StudentApplication = ({apps, postStudentFormDetails }) => {
  const cohortId = useParams().id
  filterFormData(apps, cohortId)
  console.log(filterFormData)
  const history = useHistory();
  const pageTitle="Apply For Bridge"
  useEffect(() => {
    document.title = pageTitle
  }, []);
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
        // on stccess of form submission re-direct 
        // to confirmation page
        history.push("/student/confirmation");
      });

  };

  return (
    <div>
      <Header as='h1'>{pageTitle}</Header>
      <form onSubmit={handleSubmit}>
        <p>Student form fields will go here...</p>
        <SubmitButton>Apply for Bridge</SubmitButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  postStudentFormDetails
};

const mapStateToProps = state => ({
  apps: state.apps.cohort_apps
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentApplication);
