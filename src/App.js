import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommonLayout from "./components/CommonLayout/CommonLayout";
import "./App.css";

import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminForm from "./pages/AdminForm";
import StudentDashboard from "./pages/StudentDashboard";
import StudentApplication from "./pages/StudentApplication";
import Confirmation from "./pages/StudentConfirmation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/cohorts">
          <CommonLayout>
            <StudentDashboard />
          </CommonLayout>
        </Route>
        <Route path="/student/application/:id">
          <CommonLayout>
            <StudentApplication />           
          </CommonLayout>
        </Route>
        <Route exact path="/admin/cohorts">
          <CommonLayout isAdmin>
            <AdminDashboard />
          </CommonLayout>
        </Route>
        <Route exact path="/admin/cohorts/application">
          <CommonLayout>
            <AdminForm />
          </CommonLayout>
        </Route>
        <Route exact path="/student/confirmation">
          <CommonLayout>
            <Confirmation />
          </CommonLayout>
        </Route>
        <Route exact path="/">
          <CommonLayout>
            <Home />
          </CommonLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
