import React from 'react';
import { Button, Checkbox, Form } from "semantic-ui-react";

import SubmitButton from "./SubmitButton";

// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below
const StudentForm = (props) => {



  return (
    <Form>
      <p>Student form fields will go here...</p>
      <SubmitButton>Apply for Bridge</SubmitButton>
    </Form>
  );
}

export default StudentForm;