import React, {useEffect} from "react";
import {Header} from 'semantic-ui-react'
import StudentForm from '../components/StudentForm';

const StudentApplication = () => {
  const pageTitle="Apply For Bridge";
  useEffect(() => {
    document.title = pageTitle
  }, []);
  return (
    <>
      <Header as="h1" size="huge">{pageTitle}</Header>
      <StudentForm />
    </>
  );
};

export default StudentApplication;