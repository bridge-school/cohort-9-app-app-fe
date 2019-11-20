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
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

