import React from "react";
import {Header} from "semantic-ui-react"
import AdminForm from "../components/AdminForm";
import styled from 'styled-components';

const CohortApplication = () => {
  return(
    <ApplicationContainer>
      <Header as="h1">Create Cohort Application Form</Header>
      <AdminForm />
    </ApplicationContainer>
  );
}

export const ApplicationContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export default CohortApplication;
