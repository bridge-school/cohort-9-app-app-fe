import React, { useState } from 'react';

import TextInput from './TextInput';
import Select from './Select';
import SubmitButton from './SubmitButton';

const AdminApplicationForm = () => {
  const [cohortName, setCohortName] = useState(null);
  const [cohortType, setCohortType] = useState(null);

  const handleCohortNameChange = e => {
    setCohortName(e.target.value);
  };

  const handleCohortTypeChange = (e) => {
    setCohortType(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting`);
    // on submit we need to save the form in DB
  }

  const selectOptions = [
    { value: "frontend", displayedName: 'Fronend' },
    { value: "backend", displayedName: 'Backend' },
    { value: "productDesign", displayedName: 'Product Design' }
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput value={cohortName} handleChange={handleCohortNameChange} />
        <Select
          value={cohortType}
          handleChange={handleCohortTypeChange}
          options={selectOptions}
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default AdminApplicationForm;