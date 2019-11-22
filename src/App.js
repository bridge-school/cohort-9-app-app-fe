import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommonLayout from "./components/CommonLayout";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/cohorts">
          <CommonLayout>
            <div>
              Cohorts Student
            </div>
          </CommonLayout>
        </Route>
        <Route exact path="/admin/cohorts">
          <CommonLayout isAdmin>
            <div>
              Cohorts Admin
            </div>
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
