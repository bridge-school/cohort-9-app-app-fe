import React from 'react';
import { connect } from "react-redux";

import TypeParagraph from './StudentQuestionTypes/TypeParagraph';
import TypeShortAnswer from './StudentQuestionTypes/TypeShortAnswer';
import TypeDropdown from './StudentQuestionTypes/TypeDropdown';
import TypeCheckbox from './StudentQuestionTypes/TypeCheckbox';

import { setQuestionValue, resetQuestionError } from '../redux/actions/studentSubmissionActions';

const StudentQuestion = (props) => {
  const { type, isRequired, options, index } = props.questionData;

  const value = props.values[index];
  const error = props.errors[index];
  let { prompt } = props.questionData;

  const handleOnChange = (e) => {
    props.setQuestionValue(index, e.target.value);
    props.resetQuestionError(index);
  }

  const handleOnDropdownChange = (e, { value }) => {
    props.setQuestionValue(index, value);
    props.resetQuestionError(index);
  };

  const handleOnCheckboxChange = (e) => {
    props.setQuestionValue(index, e.target.value);
    props.resetQuestionError(index);
  }

  const renderQuestionByType = () => {
    switch (type) {
      case "short-answer":
        return <TypeShortAnswer 
          val={value}
          onChange={handleOnChange}
          error={error}
          prompt={prompt}
          isRequired={isRequired}
        />;
      case "paragraph":
        return <TypeParagraph 
          val={value} 
          onChange={handleOnChange}
          error={error}
          prompt={prompt}
          isRequired={isRequired}
        />;
      case "dropdown":
        return (
          <TypeDropdown
            options={options}
            val={value}
            onChange={handleOnDropdownChange}
            error={error}
            prompt={prompt}
            isRequired={isRequired}
          />
        );
      case "checkbox":
        return <TypeCheckbox
            options={options}
            val={value}
            onChange={handleOnCheckboxChange}
            error={error}
            prompt={prompt}
            isRequired={isRequired}
          />;
      default:
        console.error(`Unrecognized question type: ${type}`);
        return null;
    }
  }

  return (
    <div>
      {renderQuestionByType()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    values: state.studentSubmission.questionsValues,
    errors: state.studentSubmission.questionsErrors
  };
};

const mapDispatchToProps = dispatch => ({
  setQuestionValue: (index, value) => dispatch(setQuestionValue(index, value)),
  resetQuestionError: index => dispatch(resetQuestionError(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuestion);