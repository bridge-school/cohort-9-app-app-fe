import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
// import { NavStyled, AdminViewStyled, H2Styled } from "./HeaderStyled";
import { Grid, Header, Segment } from 'semantic-ui-react';
import logo from "../asset/bridge_logo.svg";

const Wrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 14px;
    font-size: 16px;
`
const HeaderNav = ({ isAdmin, title }) => {
  return (
    <Segment fitted inverted color='violet'>
      <Wrapper>
        <Grid as="nav" verticalAlign="middle" columns={3}>
          <Grid.Row>
            <Grid.Column width={2}>
              <Link to="/">
                <img src={logo} alt="logo" width="75px" height="40px"/>
              </Link>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h2" inverted>
                {title}
              </Header>
            </Grid.Column>
            { isAdmin && 
              <Grid.Column textAlign="right" width={4}>
                <Header as="p" size="medium" inverted>
                  Admin view
                </Header>
              </Grid.Column>
            }
          </Grid.Row>
        </Grid>
      </Wrapper>
    </Segment>
  )
}

export default HeaderNav;