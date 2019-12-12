import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Header, Message, Form } from "semantic-ui-react";
import { ApplicationContainer } from "./AdminFormStyled";
import { fetchAllApps } from "../redux/actions/allCohortAppsActions";

import {
  setCohortName,
  setCohortType,
  postFormDetailsThunk,
  setResetApp,
  resetIsSubmitted
} from "../redux/actions/adminFormActions";
import { resetDates } from "../redux/actions/dateActions";

import CohortNameInput from "../components/CohortNameInput";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";
import DatePickerContainer from "../components/DatePickerContainer";
import Questions from "../components/Questions/Questions";
import { filterDuplicateCohorts } from "../helperFunctions/helpers.js";

export const AdminForm = props => {
  const pageTitle = "Create Application Form";
  const [isDuplicate, setDuplicate] = useState(false);

  useEffect(() => {
    props.setResetApp();
    props.resetDates();
    props.getAllApps();
    document.title = pageTitle;
  }, []);

  const handleCohortNameChange = e => {
    props.setCohortName(e.target.value);
    setDuplicate(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      cohortName,
      cohortType,
      dateOpen,
      dateClose,
      dateOfResponse,
      existingCohorts
    } = props;

    /**
     * Check if the cohort name and type already exists in databases
     * If that already exists then the returned length will be greater than 0
     */
    const isCohortDuplicateValue = filterDuplicateCohorts(
      cohortName,
      cohortType,
      existingCohorts
    );

    //if that recotrd doesnt exist in database then add it to database
    if (isCohortDuplicateValue === 0) {
      const cohortData = {
        cohortName,
        cohortType,
        link: "/",
        dateOpen,
        dateClose,
        dateOfResponse,
        questions: props.questionsData
      };
      //calls the thunk here to "POST" to database
      props.postFormDetailsThunk(cohortData);
    } else {
      setDuplicate(true);
    }
  };

  const handleCohortTypeChange = e => {
    props.setCohortType(e.target.value);
    setDuplicate(false);
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
    <ApplicationContainer>
      <Header as="h1">{pageTitle}</Header>
      <Form onSubmit={handleSubmit}>
        <CohortNameInput
          value={props.cohortName}
          handleChange={handleCohortNameChange}
        />
        <Select
          value={props.cohortType}
          handleChange={handleCohortTypeChange}
          options={selectOptions}
        />
        <DatePickerContainer />

        <Questions />

        <SubmitButton>Create Application Group</SubmitButton>
      </Form>

      {isDuplicate && (
        <Message color="red">
          <Message.Header>Error Message</Message.Header>
          <p>{`This Cohort Name already exists for ${props.cohortType}`}</p>
        </Message>
      )}
    </ApplicationContainer>
  );
};

const mapStateToProps = state => {
  return {
    cohortName: state.cohortInfo.cohortName,
    cohortType: state.cohortInfo.cohortType,
    existingCohorts: state.apps.apps.cohort_apps,
    isSubmitted: state.cohortInfo.isSubmitted,
    error: state.cohortInfo.error,
    dateOpen: state.dates.dateOpen,
    dateClose: state.dates.dateClose,
    dateOfResponse: state.dates.dateOfResponse,
    questionsData: state.cohortInfo.questionsData
  };
};

const mapDispatchToProps = dispatch => ({
  setCohortName: cohortName => dispatch(setCohortName(cohortName)),
  setCohortType: cohortType => dispatch(setCohortType(cohortType)),
  postFormDetailsThunk: cohortData =>
    dispatch(postFormDetailsThunk(cohortData)),
  setResetApp: () => dispatch(setResetApp()),
  resetIsSubmitted: () => dispatch(resetIsSubmitted()),
  resetDates: () => dispatch(resetDates()),
  getAllApps: () => dispatch(fetchAllApps())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
