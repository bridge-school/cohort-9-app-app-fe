import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllApps } from "../redux/actions/allCohortAppsActions";
import StudentsAppsList from "../components/StudentAppsList";
import {Header } from 'semantic-ui-react'
 

const StudentDashboard = ({ isLoading, apps, getAllApps }) => {
  useEffect(() => {
    getAllApps();
  }, [getAllApps]);

  return (
    <>
      <Header as="h1">Apply</Header>
      {apps.apps.cohort_apps && (
        <StudentsAppsList apps={apps.apps.cohort_apps} />
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
