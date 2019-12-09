import React, { useState, useEffect } from 'react';
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

  // as we dont know the exact number of questions,
  // we start with an empty array
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // make request to get question data for this form

    // temp. hardcoded values:
    const errs = placeholderQuestionData.map(question => "");
    setErrors(errs);
  }, []);

  // handle submit - has access to all values of inputs
  const submitStudentData = (e) => {
    e.preventDefault();
    console.log(e);

    // check if validation is ok
    // let errs = [];
    // for each question (index)
    //  if everything good - errrs[index] = ""

    //  else errs[index] = "Can't be empty"
    // if (value of second question is empty but it required) {

    // }


    // if not, setErrors for specific questions - this modifies state

    
  }

  const getQuestionDataSuccess = true;

  // error check is temporary
  if (!getQuestionDataSuccess || errors.length === 0) {
    return null;
  }

  return (
    <Form onSubmit={submitStudentData}>
      <Form.Group widths="equal">
        <Form.Field
          required
          control={Input}
          label="Full name"
          placeholder="Full name"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input 
          label="Email" 
          placeholder="Email" 
          type="email"
          required
        />
      </Form.Group>

      {placeholderQuestionData.map((question, index) => {
        // we add index information to the question object
        // so that we can use it inside each StudentQuestion
        question.index = index;
        
        return (
          <StudentQuestion 
            key={question.timestampForKey} 
            questionData={question}
            errorInfo={errors[index]}
          />
        );
      })}

      <SubmitButton>Apply for Bridge</SubmitButton>
    </Form>
  );
}

export default StudentForm;