import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

import { postStudentFormDetails } from "../redux/actions/studentFormActions";
import SubmitButton from "../components/SubmitButton";

const StudentApplication = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const exampleFormData = {
      firstName: "Bob",
      lastName: "Pipa"
    };

    props.postStudentFormDetails(exampleFormData);

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
  postStudentFormDetails,
  // postStudentFormDetails: data =>
  //   dispatch(postStudentFormDetails(data)),
};

export default connect(null, mapDispatchToProps)(StudentApplication);
