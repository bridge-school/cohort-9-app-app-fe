import React from "react";

import AdminForm from "../components/AdminForm";
import PageTitle from "../components/PageTitle";
import { ApplicationContainer } from "./CohortApplicationStyled";

const CohortApplication = () => {
  return(
    <ApplicationContainer>
      <PageTitle>Create Cohort Application Form</PageTitle>
      <AdminForm />
    </ApplicationContainer>
  );
}

export default CohortApplication;
