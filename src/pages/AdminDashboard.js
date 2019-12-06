import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Grid, Header } from 'semantic-ui-react';
import { connect } from "react-redux";

import { fetchAllApps } from "../redux/actions/allCohortAppsActions";
import AppsList from "../components/AppsList.js";

const AdminDashboard = ({ isLoading, apps, getAllApps }) => {
  const pageTitle = "Cohort Application Forms"
  useEffect(() => {
    getAllApps();
    document.title= pageTitle
  }, [getAllApps]);
  return (
    <>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
          <Header as='h1'>{pageTitle}</Header>
          </Grid.Column>
        
          <Grid.Column textAlign='right'>
            <Button size='large' color='teal' as={Link} to="/admin/cohorts/application">Create Application Group</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {apps.apps.cohort_apps && <AppsList apps={apps.apps.cohort_apps} />}
    </>
  );
};
const mapStateToProps = state => ({
  isLoading: state.isLoading,
  apps: state.apps
});
const mapDispatchToProps = dispatch => ({
  getAllApps: () => dispatch(fetchAllApps())
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
