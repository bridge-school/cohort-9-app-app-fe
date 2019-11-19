import React from 'react';

import AdminApplicationForm from '../components/AdminApplicationForm';
import PageTitle from '../components/PageTitle';

const CohortApplication = () => {
  return(
    <div>
      <PageTitle>Create Cohort Application Form</PageTitle>
      <AdminApplicationForm />
    </div>
  );
}

export default CohortApplication;
