import React from "react";
import { Form, Checkbox } from 'semantic-ui-react'
import "./Quetions.css";

const Question = ({
  question,
  index,
  onPromptChange,
  onOptionsChange,
  onTypeChange,
  onIsRequiredChange,
  onDelete
}) => {
  const qNumber = index + 1;
  const optionsString = question.options ? question.options.join(', ') : ''
  const QUESTION_TYPE_OPTIONS = [
    { key: 'short-answer', text: 'Short Answer', value: 'short-answer'},
    { key: 'drop-down', text: 'Dropdown', value: 'drop-down'},
    { key: 'check-box', text: 'Checkboxes', value: 'check-box'},
    { key: 'paragraph', text: 'Paragraph', value: 'paragraph'}
  ]

  return (
    <>
      <Form.Group>
        <Form.Input
          id={`q${index}__name`}
          label={{ children: `Question #${qNumber}`, htmlFor: `q${index}__name` }}
          onChange={(e, {value}) => {
            onPromptChange(index, value);
          }}
          value={question.prompt}
          width={8}
        />
        <Form.Select
          fluid
          id={`q${index}__type`}
          label={{ children: `Question #${qNumber} Type`, htmlFor: `q${index}__type` }}
          options={QUESTION_TYPE_OPTIONS}
          onChange={(e, {value}) => {
            onTypeChange(index, value);
          }}
          value={question.type}
          width={4}
        />
        <Form.Field
          id={`q${index}__req`}
          className="Question-checkbox"
          control={Checkbox}
          label={{ children: `Is Required`, htmlFor: `q${index}__req` }}
          onChange={(e, {checked: value}) => {
            onIsRequiredChange(index, value);
          }}
          checked={question.required}
          width={2}
        />
        <Form.Button
          className="Question-deleteBtn"
          content="X"
          type="button"
          onClick={() => {
            onDelete(index);
          }}
          width={2}
        />
      </Form.Group>
      {(question.type === "check-box" || question.type === "drop-down") &&
        <Form.Group>
          <Form.Input
            id={`q${index}__options`}
            label={{ children: `Question #${qNumber} type options`, htmlFor: `q${index}__options` }}
            onChange={(e, {value}) => {
              onOptionsChange(index, value);
            }}
            value={optionsString}
            placeholder="a, b, c, d"
            width={16}
          />
        </Form.Group>
      }
    </>
  );
};

export default Question;
