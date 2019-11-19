import React from 'react';
import styled from "styled-components";

const Select = ({ value, handleChange, options }) => {
  return (
    <div>
      <SelectLabel>
        Cohort Type:
        <SelectDropdown value={value} onChange={handleChange}>
          <option disabled selected value>
            {" "}
            -- select an option --{" "}
          </option>

          {
            options.map(option => {
              return (
                <option value={option.value} key={option.value}>
                  {option.displayedName}
                </option>
              );
            })
          }
        </SelectDropdown>
      </SelectLabel>
    </div>
  );
};

const SelectDropdown = styled.select`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border-color: #ccc;
  background: #f4f4f4;
  color: #333;
`;

const SelectLabel = styled.label`
  display: block;
  margin: 0 auto;
  width: 80%;
  text-align: left;
  color: #1e1e1e;
`;

export default Select;