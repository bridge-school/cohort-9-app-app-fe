import React, { useEffect} from 'react';
import { connect } from "react-redux";
import { fetchAllApps } from "../redux/actions/fetchApps.actions.js";
import AppsList from "../components/AppsList.js"

const AdminDashboard = ({isLoading, apps, getAllApps}) => {
  useEffect(() => {
    getAllApps();
  }, [getAllApps]);

  return (
    <>
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