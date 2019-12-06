import React, {useEffect} from 'react';
import {Header} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
   const pageTitle = "Bridge Applications App"
    useEffect(()=> {
        document.title = pageTitle;
    })
    return (
        <div>
            <Link to="/admin/cohorts">Admin</Link>
            <Link to="/student/cohorts">Student</Link>
        </div>
    )
}

export default Home;