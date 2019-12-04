import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import StudentForm from '../components/StudentForm';
import { postStudentFormDetails } from "../redux/actions/studentFormActions";
// import SubmitButton from "../components/SubmitButton";

const StudentApplication = (props) => {
  const history = useHistory();

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
      <StudentForm onSubmit={handleSubmit}>
        {/* <p>Student form fields will go here...</p> */}
        {/* <SubmitButton>Apply for Bridge</SubmitButton> */}
      </StudentForm>
    </div>
  );
};

const mapDispatchToProps = {
  postStudentFormDetails
};

export default connect(null, mapDispatchToProps)(StudentApplication);
