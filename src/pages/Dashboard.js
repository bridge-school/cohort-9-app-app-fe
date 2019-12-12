import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOpenApps, fetchAllApps } from "../redux/actions/allCohortAppsActions";
import AppsList from "../components/AppsList";
import { Button, Grid, Header } from "semantic-ui-react";

const Dashboard =({apps, getAllApps,getAllOpenApps, isAdmin})=> {
    const pageTitle = "Cohort Application Forms"
    useEffect(() => {
        document.title= pageTitle
        isAdmin ?  getAllApps() : getAllOpenApps()
      }, [getAllApps, getAllOpenApps, isAdmin]);
      return (
        <>
          <Grid columns={2} verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column>
                <Header size='huge' as='h1'>{pageTitle}</Header>
              </Grid.Column>
            
              <Grid.Column textAlign='right'>
                {isAdmin && 
                  <Button size='large' color='teal' as={Link} to="/admin/cohorts/application">CREATE APPLICATION GROUP</Button>
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {apps.apps.cohort_apps ? <AppsList isAdmin={isAdmin} apps={apps.apps.cohort_apps} /> : <h3>Loading...</h3>}
        </>
      );
};
const mapStateToProps = state => ({
    apps: state.apps
});
const mapDispatchToProps = dispatch => ({
    getAllApps: () => dispatch(fetchAllApps()),
    getAllOpenApps: () => dispatch(fetchOpenApps())
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);