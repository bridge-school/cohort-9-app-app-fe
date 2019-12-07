import React from 'react';
import { Button, Checkbox, Select, Form, Input, TextArea, Label } from "semantic-ui-react";
import styled from "styled-components";

const StudentQuestion = ({
  questionData
}) => {
  const { type, isRequired, options } = questionData;
  let { prompt } = questionData;
  if (isRequired) {
    prompt += " *";
  }

  const renderQuestionByType = () => {
    switch (type) {
      case "short-answer":
        return (
          <Form.Group widths="equal" className="row">
            <Form.Field control={Input} label={prompt} maxLength="10"/>
          </Form.Group>
        );
      case "paragraph":
        return (
          <Form.Group widths="equal">
            <p className="sixteen wide column">{prompt}</p>
            <TextArea maxLength="10" className="sixteen wide column" />
          </Form.Group>
        );
      case "dropdown":
        const dropdownOptions = options;
        return (
          <Form.Group widths="equal" className="row">
            <p className="sixteen wide column">{prompt}</p>
            <select className="sixteen wide column">
              {/* <option disabled>Select your answer</option> */}
              {dropdownOptions.map((option, index) => {
                return <option key={index} value={option}>{option}</option>;
              })}
            </select>
            {/* <Select placeholder="Select your answer" options={options} /> */}
          </Form.Group>
        );
      case "checkboxes":
        const checkboxesOptions = options;
        return (
          <Form.Group widths="equal">
            <p>{prompt}</p>
            <OptionsContainer>
              { checkboxesOptions.map((option, index) => (
                <OptionButton key={index}>{option}</OptionButton>
              )) }
            </OptionsContainer>
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

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionButton = styled.button`
  max-width: 25%;
  padding: 5px 10px;
  background: white;
  outline: none;
  border-radius: 5px;
  color: #ccc;
  font-weight: 600;
  border: 2px solid #ccc;
  cursor: pointer;
`;

export default StudentQuestion;