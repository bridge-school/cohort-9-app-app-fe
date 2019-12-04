import React from "react";
import styled from "styled-components";

import AdminForm from "../components/AdminForm";
import PageTitle from "../components/PageTitle";

const CohortApplication = () => {
  return(
    <ApplicationContainer>
      <PageTitle>Create Cohort Application Form</PageTitle>
      <AdminForm />
    </ApplicationContainer>
  );
}

export const ApplicationContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export default CohortApplication;
