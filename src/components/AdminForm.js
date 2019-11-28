import React from "react";
import { connect } from "react-redux";
import { setCohortName, setCohortType } from "../redux/actions/adminFormActions";

import TextInput from "./TextInput";
import Select from "./Select";
import DatePickerContainer from "./DatePickerContainer";
import SubmitButton from "./SubmitButton";

const AdminForm = (props) => {
  const handleCohortNameChange = e => {
    props.setCohortName(e.target.value);
  };

  const handleCohortTypeChange = (e) => {
    props.setCohortType(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting");
    // on submit we need to save the form in DB
  }

  const selectOptions = [
    { value: "frontend", displayedName: "Frontend" },
    { value: "backend", displayedName: "Backend" },
    { value: "productDesign", displayedName: "Product Design" }
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={props.cohortName}
          handleChange={handleCohortNameChange}
        />
        <Select
          value={props.cohortType}
          handleChange={handleCohortTypeChange}
          options={selectOptions}
        />

        <DatePickerContainer />

        <SubmitButton>Create Application Group</SubmitButton>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cohortName: state.cohortInfo.cohortName,
    cohortType: state.cohortInfo.cohortType
  };
};

const mapDispatchToProps = {
  setCohortName,
  setCohortType
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);