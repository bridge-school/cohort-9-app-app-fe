import React, {useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {Header, Button} from 'semantic-ui-react'
import {Container} from "./StudentConfirmationStyled.js"
import { filterFormData } from "../helperFunctions/helpers.js"
import { fetchAppById } from "../redux/actions/cohortAppActions";


// check if apps exists, else redirect
const Confirmation = ({app, getApplicationById}) => {    
  const pageTitle = "Congratulations!";
  const cohortId = useParams().id;
  const cohortData = app
  useEffect(() => {
    document.title = pageTitle
    getApplicationById(cohortId)
  }, [getApplicationById, cohortId]);

  let cohort_name, close_date, response_date;
  if (cohortData) {
    cohort_name =  cohortData[0].cohortName;
    close_date =  cohortData[0].dateClose;
    response_date = cohortData[0].dateOfResponse;
  }

  return (
    <Container>
      <Header as="h1"><span role="img" aria-label="tada">🎉</span>{pageTitle}<span role="img" aria-label="tada">🎉</span></Header>
      { cohortData && (
        <p>You have successfully submitted your application to {cohort_name}. 
        <br></br>
        Applications will be open until <time>{moment(close_date).format('DD/MM/YYYY')}</time>. 
        <br></br>
        {cohortData["dateClose"]}
        All applicants will hear back from the Bridge team by <time>{moment(response_date).format('DD/MM/YYYY')}</time>. 
      </p>
      )}
    </Container>
  )
  
}

const mapDispatchToProps = dispatch => ({
  getApplicationById: (id) => dispatch(fetchAppById(id))
});

const mapStateToProps = state => ({
  app: state.app.cohort.cohort,
})

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
