import React, {useEffect} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {Header} from 'semantic-ui-react'

import { postStudentFormDetails } from "../redux/actions/studentFormActions";
import SubmitButton from "../components/SubmitButton";

const StudentApplication = (props) => {
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

    props.postStudentFormDetails(exampleFormData)
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

export default connect(null, mapDispatchToProps)(StudentApplication);
