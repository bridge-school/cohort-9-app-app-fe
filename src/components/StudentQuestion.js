import React from 'react';
import { Button, Checkbox, Select, Form, Input, TextArea, Label } from "semantic-ui-react";

const StudentQuestion = ({
  questionData
}) => {

  const { prompt, type, isRequired, options } = questionData;

  const renderQuestionByType = () => {
    switch (type) {
      case "short-answer":
        return (
          <Form.Group widths="equal" className="row">
            <p className="sixteen wide column">{prompt}</p>
            <TextArea className="sixteen wide column" />
          </Form.Group>
        );
      case "paragraph":
        return (
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label={prompt}
            />
          </Form.Group>
        );
      case "dropdown":
        const dropdownOptions = options;
        return (
          <Form.Group widths="equal" className="row">
            <p className="sixteen wide column">{prompt}</p>
            <select
              placeholder="Select your answer"
              className="sixteen wide column"
            >
              {dropdownOptions.map(option => {
                return <option value={option}>{option}</option>;
              })}
            </select>
            {/* <Select placeholder="Select your answer" options={options} /> */}
          </Form.Group>
        );
      case "checkboxes":
        const checkboxesOptions = options;
        return (
          <Form.Group widths="equal">
            <p className="row">{prompt}</p>
            <div className="row">
              {checkboxesOptions.map(option => (
                <button className="column">{option}</button>
              ))}
            </div>
          </Form.Group>
        );
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

export default StudentQuestion;