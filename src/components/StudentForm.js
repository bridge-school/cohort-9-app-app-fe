import React from 'react';
import { Button, Checkbox, Form } from "semantic-ui-react";

import TextInput from "./TextInput";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

// this should receive id from clicked button on student's dashboard
// and get the assosiated id for displaying below
const StudentForm = (props) => {



  return (
    <Form
    // onSubmit={handleSubmit}
    >
      <p>Student form fields will go here...</p>
      <TextInput
      // value={props.cohortName}
      // handleChange={handleCohortNameChange}
      />
      <Select
      // value={props.cohortType}
      // handleChange={handleCohortTypeChange}
      // options={selectOptions}
      />
      <SubmitButton>Apply for Bridge</SubmitButton>
    </Form>
  );
}

export default StudentForm;