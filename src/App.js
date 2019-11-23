import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommonLayout from "./components/CommonLayout";
import "./App.css";
import { request } from "./backend-request";
import DatePickerContainer from "./components/DatePickerContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/cohorts">
          <CommonLayout>
            <div>Cohorts Student</div>
          </CommonLayout>
        </Route>
        <Route exact path="/admin/cohorts">
          <CommonLayout isAdmin>
            <div>
              Cohorts Admin
              <DatePickerContainer></DatePickerContainer>
            </div>
          <div className="Datepicker">
          <DatePickerContainer></DatePickerContainer>
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
