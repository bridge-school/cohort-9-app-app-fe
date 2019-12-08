import React, {useEffect} from 'react';
import {Header} from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import { filterFormData } from "../helperFunctions/helpers.js"
import { connect } from "react-redux";
import moment from "moment";


const Confirmation = ({apps}) => {    
  const pageTitle="Congratulations!";
  const cohortId = useParams().id;

  console.log(apps, cohortId)
  const filteredData = filterFormData(apps, cohortId);
  const {cohortName, dateOfResponse, dateClose} =  filteredData[0];
  useEffect(() => {
    document.title = pageTitle
  }, []);
  return (
    <>
      <Header as="h1"><span role="img" aria-label="tada">🎉</span>{pageTitle}</Header>
      <p>You have successfully submitted your application to {cohortName}. Applications will be open until <time>{moment(dateClose).format('MM/DD/YYYY')}</time>. All applicants will hear back from the Bridge team by <time>{moment({dateOfResponse}).format('MM/DD/YYYY')}</time>. 
          <span role="img" aria-label="tada">🎉</span>
      </p>
    </>
  )
}

const mapStateToProps = state => ({
  apps: state.apps.apps.cohort_apps
});

export default connect(mapStateToProps, null)(Confirmation);




