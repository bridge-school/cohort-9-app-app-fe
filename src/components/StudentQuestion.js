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
          value={value} 
          onChange={handleOnChange}
        />;
      case "paragraph":
        return <TypeParagraph 
          value={value} 
          onChange={handleOnChange}
        />;
      case "dropdown":
        return <TypeDropdown 
          options={options} 
          value={value} 
          onChange={handleOnChange}
        />;
      case "checkboxes":
        return (
          <TypeCheckbox
            options={options}
            value={value}
            onChange={handleOnCheckboxChange}
          />
        );
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
  };
};

const mapDispatchToProps = dispatch => ({
  setQuestionValue: (index, value) => dispatch(setQuestionValue(index, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuestion);