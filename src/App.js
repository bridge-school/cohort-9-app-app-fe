import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";

import CohortApplication from './pages/CohortApplication';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <div className="App">
      <CohortApplication />
    </div>
  );
}

export default App;
