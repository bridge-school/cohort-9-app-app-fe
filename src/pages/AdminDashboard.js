import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { fetchAllApps, allApps, isLoading } from "../redux/actions/fetchApps.actions.js";
import AppsList from "../components/AppsList.js"
import { request } from "../backend-request";

// export const AdminDashboard = ({isLoading, allApps, fetchAllApps}) => {
export const AdminDashboard = () => {
  const [allApps, setAllApps] = useState([])
  // useEffect(() => {
  //   fetchAllApps();
  //       console.log(allApps)
  //     }, [fetchAllApps]);
  useEffect(() => {
    const fetchData = async () => { 
      const res = await request("applications")
      const data = await res.json();
      console.log(data)
      setAllApps(data)

      return res;      
    };
    fetchData();
  }, [])
  console.log(allApps)
  return (
      <AppsList allApps={allApps} />
  )
}

// const mapStateToProps = state => ({
//     isLoading: state.isLoading,
//     allApps: state.allApps,
//   })

//   const mapDispatchToProps = dispatch => ({
//     fetchAllApps: () => dispatch(fetchAllApps()),
//   })
  
// export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);