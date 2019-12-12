import React, { useEffect } from "react";
import { Form, Checkbox, Icon, Button } from 'semantic-ui-react'

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
    { key: 'dropdown', text: 'Dropdown', value: 'dropdown'},
    { key: 'checkbox', text: 'Checkboxes', value: 'checkbox'},
    { key: 'paragraph', text: 'Paragraph', value: 'paragraph'}
  ]


  return (
    <>
      <Form.Group>
        <Form.Field width={8}>
          <label htmlFor={`q${index}__name`}>{`Question #${qNumber}`}</label>
          <input 
            id={`q${index}__name`}
            onChange={(e) => {
              onPromptChange(index, e.target.value);
            }}
            value={question.prompt}
          ></input>
        </Form.Field>
        <Form.Select 
          label={`Question #${qNumber} Type`} 
          id={`q${index}__type`}
          fluid
          options={QUESTION_TYPE_OPTIONS}
          onChange={(e, {value}) => {
            onTypeChange(index, value);
          }}
          value={question.type}
          width={4} 
        ></Form.Select>
        <Form.Field width={3}>
          <label 
          htmlFor={`q${index}__req`}>
            Is Required <br></br>
          </label>
          <Checkbox 
            content={<Icon color="teal" fitted name='check square outline' />}
            color="teal"
            size="huge"
            id={`q${index}__req`}
            onChange={(e, {checked: value}) => {
              onIsRequiredChange(index, value);
              console.log(question.required)
            }}
            checked={question.required}
          /> 
        </Form.Field>
        <Button
          basic
          color="teal"
          onClick={() => {
            onDelete(index);
          }}
          width={1}
        ><Icon color="teal" fitted name='trash' /></Button>
    </Form.Group>
    <Form.Group>

      {(question.type === "checkbox" || question.type === "dropdown") &&
          <Form.Input
            id={`q${index}__options`}
            label={`q${index}__options`}
            // label={{ children: `Question #${qNumber} ${question.type} options`, htmlFor: `q${index}__options` }}
            onChange={(e, {value}) => {
              onOptionsChange(index, value);
            }}
            value={optionsString}
            placeholder="a, b, c, d"
            width={8}
          />
        }
      </Form.Group>
    </>
  );
};

export default Question;
