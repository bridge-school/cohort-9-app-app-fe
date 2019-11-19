import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { request } from "./backend-request";
import DatePickerContainer from "./components/DatePickerContainer";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <div className="App">
      <DatePickerContainer></DatePickerContainer>
    </div>
  );
}

export default App;
