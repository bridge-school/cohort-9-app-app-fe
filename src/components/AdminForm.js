import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  setCohortName,
  setCohortType,
  postFormDetailsThunk,
  setResetApp,
  resetIsSubmitted
} from "../redux/actions/adminFormActions";

import TextInput from "./TextInput";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import DatePickerContainer from "./DatePickerContainer";

const AdminForm = props => {
  const [isDuplicate, setDuplicate] = useState(false);
  console.log(props);
  useEffect(() => {
    props.setResetApp();
  }, []);

  const handleCohortNameChange = e => {
    props.setCohortName(e.target.value);
  };

  /**
   * Check if the cohort name and type already exists in databases
   * If that already exists then the returned length will be greater than 0
   */
  const isCohortDuplicate = () => {
    const { cohortName, cohortType, existingCohorts } = props;
    return existingCohorts
      .filter(cohort => cohort.cohortType === cohortType)
      .filter(
        cohort => cohort.cohortName.toLowerCase() === cohortName.toLowerCase()
      ).length;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { cohortName, cohortType, existingCohorts } = props;
    const isCohortDuplicateValue = isCohortDuplicate();
    //if that recotrd doesnt exist in database then add it to database
    if (isCohortDuplicateValue === 0) {
      const cohortData = {
        cohortName,
        cohortType,
        link: "/"
      };
      //calls the thunk here to "POST" to database
      props.postFormDetailsThunk(cohortData);
    } else {
      setDuplicate(true);
    }
  };

  const handleCohortTypeChange = e => {
    props.setCohortType(e.target.value);
  };

  const selectOptions = [
    { value: "Frontend Development", displayedName: "Frontend Development" },
    { value: "Backend Development", displayedName: "Backend Development" },
    { value: "Product Design", displayedName: "Product Design" }
  ];

  //If we add the record to database then isSubmitted and error state will be changed and we redirect to previous page
  if (props.isSubmitted && props.error === "") {
    props.resetIsSubmitted();
    return <Redirect to="/admin/cohorts" />;
  }

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
        <SubmitButton />
      </form>
      {isDuplicate && (
        <p>{`This Cohort Name already exists for ${props.cohortType}`}</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cohortName: state.cohortInfo.cohortName,
    cohortType: state.cohortInfo.cohortType,
    existingCohorts: state.apps.apps.cohort_apps,
    isSubmitted: state.cohortInfo.isSubmitted,
    error: state.cohortInfo.error
  };
};

const mapDispatchToProps = dispatch => ({
  setCohortName: cohortName => dispatch(setCohortName(cohortName)),
  setCohortType: cohortType => dispatch(setCohortType(cohortType)),
  postFormDetailsThunk: cohortData =>
    dispatch(postFormDetailsThunk(cohortData)),
  setResetApp: () => dispatch(setResetApp()),
  resetIsSubmitted: () => dispatch(resetIsSubmitted())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
