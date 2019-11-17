import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { request } from "./backend-request";
import Dashboard from "./components/Dashboard"

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
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
