import React, { useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllApps } from "../redux/actions/fetchApps";

// fetch specific cohort information that relates to form just filled out (fetch by id? by name?)
// cohort name
// close date
// date of response
const Confirmation = ({apps, getAllApps}) => {  
    useEffect(() => {
        getAllApps();
    }, [getAllApps]);

    const {cohortName} = apps.apps.cohort_apps;
    
    
  return (
    <>
        {apps.apps.cohort_apps && 
         <h1>  
            `tada 
            Congratulations! You have successfully submitted your application to ${cohortName}. 
            Applications will be open until Close Date. 
            All applicants will hear back from the Bridge team by Date of Response. 
            tada`
        </h1>
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