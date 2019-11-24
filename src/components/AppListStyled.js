import styled from "styled-components";

export const AppListStyled = styled.ul`
  margin: 0;
  padding: 1rem;
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    background-color: smoke;
    p {
      font-weight: bold;
    }
    a {
      padding: 10px;
      border: 1px solid black;
      text-decoration: none;
      color: white;
      background-color: purple;
    }
  }
`;
