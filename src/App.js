import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommonLayout from "./components/CommonLayout/CommonLayout";
import "./App.css";

import AdminDashboard from "./pages/AdminDashboard";
import CohortApplication from "./pages/CohortApplication";
import StudentDashboard from "./pages/StudentDashboard";
import StudentApplication from "./pages/StudentAppication";
import Confirmation from "./pages/StudentConfirmation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/cohorts">
          <CommonLayout>
            <div>Cohorts Student</div>
            <Link to="/student/application">Cohort Application</Link>
          </CommonLayout>
        </Route>
        <Route exact path="/student/application">
          <CommonLayout>
            <div>Cohort Application</div>
            <StudentApplication />
            <StudentDashboard />
          </CommonLayout>
        </Route>
        <Route exact path="/admin/cohorts">
          <CommonLayout isAdmin>
            <AdminDashboard />
          </CommonLayout>
        </Route>
        <Route exact path="/admin/cohorts/application">
          <CommonLayout>
            <CohortApplication />
          </CommonLayout>
        </Route>
        <Route exact path="/student/confirmation">
          <CommonLayout>
            <Confirmation />
          </CommonLayout>
        </Route>
        <Route exact path="/">
          <CommonLayout>
            <div>
              <Link to="/admin/cohorts">Admin</Link>
            </div>
            <div>
              <Link to="/student/cohorts">Student</Link>
            </div>
          </CommonLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
