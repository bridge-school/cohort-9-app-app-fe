import React from 'react';
import { connect } from "react-redux";

import TypeParagraph from './StudentQuestionTypes/TypeParagraph';
import TypeShortAnswer from './StudentQuestionTypes/TypeShortAnswer';
import TypeDropdown from './StudentQuestionTypes/TypeDropdown';
import TypeCheckbox from './StudentQuestionTypes/TypeCheckbox';

import { setQuestionValue, resetQuestionError } from '../redux/actions/studentFormActions';

const StudentQuestion = (props) => {
  const { type, isRequired, options, index } = props.questionData;

  const value = props.values[index];
  const error = props.errors[index];

  let { prompt } = props.questionData;
  if (isRequired) {
    prompt += " *";
  }

  const handleOnChange = (e) => {
    props.setQuestionValue(index, e.target.value);
    props.resetQuestionError(index);
  }

  const handleOnCheckboxChange = (val) => {
    props.setQuestionValue(index, val);
    props.resetQuestionError(index);
  }

  const renderQuestionByType = () => {
    switch (type) {
      case "short-answer":
        return <TypeShortAnswer 
          val={value}
          onChange={handleOnChange}
          error={error}
        />;
      case "paragraph":
        return <TypeParagraph 
          val={value} 
          onChange={handleOnChange}
          error={error}
        />;
      case "dropdown":
        return <TypeDropdown 
          options={options} 
          val={value} 
          onChange={handleOnChange}
          error={error}
        />;
      case "checkboxes":
        return <TypeCheckbox
            options={options}
            val={value}
            onChange={handleOnCheckboxChange}
            error={error}
          />;
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
    values: state.studentForm.questionsValues,
    errors: state.studentForm.questionsErrors
  };
};

const mapDispatchToProps = dispatch => ({
  setQuestionValue: (index, value) => dispatch(setQuestionValue(index, value)),
  resetQuestionError: index => dispatch(resetQuestionError(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuestion);