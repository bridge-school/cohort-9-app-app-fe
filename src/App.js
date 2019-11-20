import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import Dashboard from "./components/Dashboard"

function App() {
  useEffect(() => {
    const fetchData = async () => { 
      const res = await request("applications")
      const data = await res.json();
      console.log(data)
      return res;      
    };
    fetchData();
  });
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
