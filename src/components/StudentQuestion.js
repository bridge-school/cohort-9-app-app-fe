import React from 'react';
import { connect } from "react-redux";

import TypeParagraph from './StudentQuestionTypes/TypeParagraph';
import TypeShortAnswer from './StudentQuestionTypes/TypeShortAnswer';
import TypeDropdown from './StudentQuestionTypes/TypeDropdown';
import TypeCheckbox from './StudentQuestionTypes/TypeCheckbox';

const StudentQuestion = ({ questionData }) => {
  const { type, isRequired, options } = questionData;
  let { prompt } = questionData;
  if (isRequired) {
    prompt += " *";
  }

  const renderQuestionByType = () => {
    switch (type) {
      case "short-answer":
        return <TypeShortAnswer />;
      case "paragraph":
        return <TypeParagraph />;
      case "dropdown":
        return <TypeDropdown options={options} />;
      case "checkboxes":
        return <TypeCheckbox options={options} />;
      default:
        console.error(`Unrecognized question type: ${type}`);
        return null;
    }
  }

  return (
    <div>
      <p>{prompt}</p>
      {renderQuestionByType()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // cohortName: state.cohortInfo.cohortName,
    // cohortType: state.cohortInfo.cohortType,
    // existingCohorts: state.apps.apps.cohort_apps,
    // isSubmitted: state.cohortInfo.isSubmitted,
    // error: state.cohortInfo.error,
    // dateOpen: state.dates.dateOpen,
    // dateClose: state.dates.dateClose,
    // dateOfResponse: state.dates.dateOfResponse,
    // questionsData: state.cohortInfo.questionsData
  };
};

const mapDispatchToProps = dispatch => ({
  // setCohortName: cohortName => dispatch(setCohortName(cohortName)),
  // setCohortType: cohortType => dispatch(setCohortType(cohortType)),
  // postFormDetailsThunk: cohortData =>
  //   dispatch(postFormDetailsThunk(cohortData)),
  // setResetApp: () => dispatch(setResetApp()),
  // resetIsSubmitted: () => dispatch(resetIsSubmitted()),
  // resetDates: () => dispatch(resetDates())
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuestion);