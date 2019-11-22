import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import AdminDashboard from "./pages/AdminDashboard"


function App() {
  useEffect(() => {
    const fetchData = async () => { 
      const res = await request("applications")
      const data = await res.json();
      return res;      
    };
    fetchData();
  },[]);
  return (
    <div className="App">
      <AdminDashboard />
    </div>
  );
}

export default App;