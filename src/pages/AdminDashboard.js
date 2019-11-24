import React, { useEffect} from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllApps } from "../redux/actions/fetchApps";
import AppsList from "../components/AppsList.js"

const AdminDashboard = ({isLoading, apps, getAllApps}) => {
  useEffect(() => {
    getAllApps();
  }, [getAllApps]);

  return (
    <>
    <h1>Cohort Application Forms</h1>
    <Link to="/admin/cohorts/application">Create Application Group</Link>
    {apps.apps.cohort_apps &&
        <AppsList apps={apps.apps.cohort_apps}/>
    }
    </>
  )
}
const mapStateToProps = state => ({
    isLoading: state.isLoading,
    apps: state.apps,
})
const mapDispatchToProps = dispatch => ({
  getAllApps: () => dispatch(fetchAllApps()),
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);