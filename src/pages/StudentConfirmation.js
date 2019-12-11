import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {Header} from 'semantic-ui-react'
import {Container} from "./StudentConfirmationStyled.js"
import { getCohortApplicationById} from "../redux/actions/getCohortApplicationByIdActions";

// check if apps exists, else redirect
const Confirmation = ({app, getApplicationById}) => {    
  const pageTitle = "Congratulations!";
  const cohortId = useParams().id;
  const cohortData = app;
  useEffect(() => {
    document.title = pageTitle
    !cohortData && getApplicationById(cohortId)
  }, [cohortId, cohortData, getApplicationById]);

  let cohort_name, close_date, response_date;
  if (cohortData) {
    cohort_name =  cohortData.cohortName;
    close_date =  cohortData.dateClose;
    response_date = cohortData.dateOfResponse;
  }
  return (
    <Container>
      <Header as="h1"><span role="img" aria-label="tada">🎉</span>{pageTitle}<span role="img" aria-label="tada">🎉</span></Header>
      { cohortData && (
        <p>You have successfully submitted your application to {cohort_name}. 
        <br></br>
        Applications will be open until <time>{moment(close_date).format('DD/MM/YYYY')}</time>. 
        <br></br>
        All applicants will hear back from the Bridge team by <time>{moment(response_date).format('DD/MM/YYYY')}</time>. 
      </p>
      )}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  getApplicationById: cohortId => dispatch(getCohortApplicationById(cohortId))
});

const mapStateToProps = state => ({
  app: state.cohortApplication.cohortApplicationReceived
})

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);