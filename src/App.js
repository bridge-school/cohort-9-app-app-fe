import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommonLayout from "./components/CommonLayout/CommonLayout";
import "./App.css";

import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import Dashboard from "./pages/Dashboard";
import StudentApplication from "./pages/StudentApplication";
import Confirmation from "./pages/StudentConfirmation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student">
          <CommonLayout>
            <Dashboard isAdmin={false}/>
          </CommonLayout>
        </Route>
        <Route path="/student/apply/:id">
          <CommonLayout>
            <StudentApplication />           
          </CommonLayout>
        </Route>
        <Route exact path="/admin">
          <CommonLayout isAdmin>
            <Dashboard isAdmin={true}/>
          </CommonLayout>
        </Route>
        <Route exact path="/admin/application">
          <CommonLayout isAdmin>
            <AdminForm />
          </CommonLayout>
        </Route>
        <Route path="/student/confirmation/:id">
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
