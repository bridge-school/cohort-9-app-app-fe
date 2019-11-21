import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import Dashboard from "./components/Dashboard"
import { AdminDashboard } from "./pages/AdminDashboard"
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  useEffect(() => {
    const fetchData = async () => { 
      const res = await request("applications")
      const data = await res.json();
      // console.log(data)
      return res;      
    };
    fetchData();
  });
  return (
    <Provider store={store}>
      <div className="App">
        <AdminDashboard />
      </div>
    </Provider>
  );
}

export default App;