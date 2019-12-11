import React from "react";
import { Link } from "react-router-dom";
import { NavStyled, AdminViewStyled, H2Styled } from "./HeaderStyled";
import { Grid } from 'semantic-ui-react';
import logo from "../../asset/bridge_logo.svg";

const Header = ({ isAdmin, title }) => {
  return (
    <NavStyled>
      <Grid padded verticalAlign="middle" columns={3}>
        <Grid.Row>
          <Grid.Column width={2}>
            <Link to="/">
              <img src={logo} alt="logo" width="75px" height="40px"/>
            </Link>
          </Grid.Column>
          <Grid.Column width={10}>
            <H2Styled>
              {title}
            </H2Styled>
          </Grid.Column>
          { isAdmin && 
            <Grid.Column textAlign="right" width={4}>
              <AdminViewStyled>
                Admin view
              </AdminViewStyled>
            </Grid.Column>
          }
        </Grid.Row>
      </Grid>
    </NavStyled>
  )
}

export default Header;