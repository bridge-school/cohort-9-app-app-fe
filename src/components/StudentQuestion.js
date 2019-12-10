import React from 'react';
import { connect } from "react-redux";

import TypeParagraph from './StudentQuestionTypes/TypeParagraph';
import TypeShortAnswer from './StudentQuestionTypes/TypeShortAnswer';
import TypeDropdown from './StudentQuestionTypes/TypeDropdown';
import TypeCheckbox from './StudentQuestionTypes/TypeCheckbox';

import {setQuestionValue} from '../redux/actions/studentFormActions';

const StudentQuestion = (props) => {
  const { type, isRequired, options, index } = props.questionData;

  const value = props.values[index];
  const error = props.errors[index];

  console.log('ERROR');
  console.log(error);
  console.log('value outside');
  console.log(value);

  let { prompt } = props.questionData;
  if (isRequired) {
    prompt += " *";
  }

  const handleOnChange = (e) => {
    props.setQuestionValue(index, e.target.value);
  }

  const handleOnCheckboxChange = (val) => {
    props.setQuestionValue(index, val);
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
  setQuestionValue: (index, value) => dispatch(setQuestionValue(index, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuestion);