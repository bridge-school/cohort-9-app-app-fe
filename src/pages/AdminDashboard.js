import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { fetchAllApps } from "../redux/actions/fetchApps.actions.js";
// import AppsList from "../components/AppsList.js"

const AdminDashboard = ({isLoading, apps, getAllApps}) => {
  useEffect(() => {
    getAllApps();
    console.log(apps)
  }, [getAllApps]);


  return (
    <h1>hi</h1>
      // <AppsList allApps={allApps} />
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