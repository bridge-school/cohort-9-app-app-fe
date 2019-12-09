import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOpenApps } from "../redux/actions/allCohortAppsActions";
import AppsList from "../components/AppsList";
import { Header } from "semantic-ui-react";

const StudentDashboard = ({ isLoading, apps, getAllOpenApps }) => {
  const pageTitle = "Cohort Application Forms";

  useEffect(() => {
    getAllOpenApps();
    document.title = pageTitle;
  }, [getAllOpenApps]);

  return (
    <>
      <Header as="h1">{pageTitle}</Header>
      {apps.apps.cohort_apps && <AppsList apps={apps.apps.cohort_apps} />}
    </>
  );
};
const mapStateToProps = state => ({
  isLoading: state.isLoading,
  apps: state.apps
});
const mapDispatchToProps = dispatch => ({
  getAllOpenApps: () => dispatch(fetchOpenApps())
});
export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
