import React, {useEffect} from 'react';
import { Button, Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Home = () => {
   const pageTitle = "Bridge Applications App"
    useEffect(()=> {
        document.title = pageTitle;
    })
    return (
        <Grid relaxed columns={2}>
            <Grid.Column textAlign="center">
                <Link to="/admin/cohorts"><Button color="teal" size="huge">Admin</Button></Link>
            </Grid.Column>
            <Grid.Column textAlign="center">
                <Link to="/student/cohorts"><Button color="purple" size="huge">Student</Button></Link>
            </Grid.Column>
        </Grid>
    )
}

export default Home;