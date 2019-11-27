import React, { useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllApps } from "../redux/actions/fetchApps";

// for this to work, in student data, we need to include the apps data id they are applying to

const Confirmation = ({apps, getAllApps, appId}) => {  
  useEffect(() => {
        getAllApps();
    }, [getAllApps]);
    console.log(apps.apps.cohort_apps)
return (
  <>
  {apps.apps.cohort_apps &&
  apps.apps.cohort_apps
    .filter(app => app.id === "QlfCwZcCu4O5gKnhUoam")
    .map(app => {
      // also need to destructure close data and date of response to include in text
      const {cohortName} = app;
      return (
        <h1>  
          `🎉
          Congratulations! You have successfully submitted your application to {cohortName}. 
          Applications will be open until Close Date. 
          All applicants will hear back from the Bridge team by Date of Response. 
          🎉`
      </h1>
      )
    })
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);