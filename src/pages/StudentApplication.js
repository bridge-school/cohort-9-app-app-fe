import React from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { postStudentFormDetails } from "../redux/actions/studentFormActions";
import SubmitButton from "../components/SubmitButton";

const StudentApplication = ({apps, postStudentFormDetails }) => {
  const cohortId = useParams().id
  const formData = apps.apps.cohort_apps.filter(app => app.id === cohortId)
  console.log(formData)
  const history = useHistory();

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
  apps: state.apps
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentApplication);
