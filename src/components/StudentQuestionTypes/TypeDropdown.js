import React from "react";
import {
  Form,
  // Message,
  Select
} from "semantic-ui-react";

const TypeDropdown = ({ val, onChange, options, error, prompt, isRequired }) => {
  const selectOptions = options.map((option, index) => Object.fromEntries([["key", index], ["value",option], ["text",option]]));

  // const handleDropdownChange = () => {
  //   onChange;
  // }
  
  console.log(selectOptions)
  return (
    <>
      {/* {error !== "" && error !== undefined && <Message>{error}</Message>} */}
      <Form.Field>
        <label>{prompt}</label>
        <Select
          placeholder="select"
          required={isRequired}
          defaultValue={options[0]}
          onChange={onChange}
          value={val}
          options={selectOptions}
        >
        </Select>
      </Form.Field> 
    </>
  );
};


export default TypeDropdown;