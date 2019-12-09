import React, {useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {Header, Button} from 'semantic-ui-react'
import {Container} from "./StudentConfirmationStyled.js"
import { filterFormData } from "../helperFunctions/helpers.js"

// check if apps exists, else redirect
const Confirmation = ({apps}) => {    
  const pageTitle= apps.length === 0 ? "Whoops" : "Congratulations!";
  const cohortId = useParams().id;
  useEffect(() => {
    document.title = pageTitle
  }, []);
  if (apps.length !== 0) {
    const filteredData = filterFormData(apps, cohortId);
    const {cohortName, dateOfResponse, dateClose} =  filteredData[0];
    return (
      <Container>
        <Header as="h1"><span role="img" aria-label="tada">🎉</span>{pageTitle}</Header>
      
        <p>You have successfully submitted your application to {cohortName}. 
          <br></br>
          Applications will be open until <time>{moment(dateClose).format('MM/DD/YYYY')}</time>. 
          <br></br>
          All applicants will hear back from the Bridge team by <time>{moment({dateOfResponse}).format('MM/DD/YYYY')}</time>. 
          <span role="img" aria-label="tada">🎉</span>
        </p>
      </Container>
    )
  } else {
    return (
      <>
        <Header as="h1">Whoops</Header>
        <Link to="/student/cohorts">
          <Button>Back</Button>
        </Link>
      </>
    )
  }
}

const mapStateToProps = state => ({
  apps: state.apps.apps.cohort_apps
});

export default connect(mapStateToProps, null)(Confirmation);
