import React from 'react';
import { Button, Checkbox, Form, Input} from "semantic-ui-react";

import SubmitButton from "./SubmitButton";
import StudentQuestion from "./StudentQuestion";

// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below
const StudentForm = (props) => {

  const placeholderQuestionData = [
    {
      prompt: "Checkboxes Question......?",
      type: "checkboxes",
      isRequired: true,
      options: ["option one", "option two", "option three", "option four"],
      timestampForKey: 1575348543996
    },
    {
      prompt: "Dropdown Question...........?",
      type: "dropdown",
      isRequired: false,
      options: ["one", "two", "three", "four"],
      timestampForKey: 1575348548884
    },
    {
      prompt: "Paragraph Question...........?",
      type: "paragraph",
      isRequired: true,
      options: [],
      timestampForKey: 1575348559154
    },
    {
      prompt: "Short-Answer Question...........?",
      type: "short-answer",
      isRequired: false,
      options: [],
      timestampForKey: 1575348548888
    }
  ];


  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Full name"
          placeholder="Full name"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input label="Email" placeholder="Email" />
      </Form.Group>
      {/* <Form.Group> */}
        {/* <p>Qusestions below</p> */}
        {placeholderQuestionData.map(question => {
          return (
            <StudentQuestion key={question.timestampForKey} questionData={question} />
          );
        })}
      {/* </Form.Group> */}

      <SubmitButton>Apply for Bridge</SubmitButton>
    </Form>
  );
}

export default StudentForm;