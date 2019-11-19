import React from 'react';
import styled from "styled-components";

import AdminApplicationForm from '../components/AdminApplicationForm';
import PageTitle from '../components/PageTitle';

const CohortApplication = () => {
  return(
    <ApplicationContainer>
      <PageTitle>Create Cohort Application Form</PageTitle>
      <AdminApplicationForm />
    </ApplicationContainer>
  );
}

const ApplicationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default CohortApplication;
