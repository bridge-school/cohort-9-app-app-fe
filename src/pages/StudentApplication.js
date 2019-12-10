import React, {useEffect} from "react";
import { connect } from "react-redux";
import {Header} from 'semantic-ui-react'
import { useHistory, useParams } from "react-router-dom";

import StudentForm from '../components/StudentForm';

export const filterFormData = (arr, id) => arr.filter(obj => obj.id === id);

const StudentApplication = ({apps, postStudentFormDetails }) => {
  const cohortId = useParams().id;
  const filteredData = filterFormData(apps, cohortId);
  const history = useHistory();
  const pageTitle="Apply For Bridge";

  useEffect(() => {
    document.title = pageTitle
  }, []);

  return (
    <>
      <Header as="h1">{pageTitle}</Header>
      <StudentForm />
    </>
  );
};

const mapStateToProps = state => ({
  apps: state.apps.apps.cohort_apps
});

export default connect(mapStateToProps)(StudentApplication);
