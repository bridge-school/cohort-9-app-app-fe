import styled from "styled-components";

export const AppListStyled = styled.ul`
  margin: 0;
  margin-top: 6rem;
  padding: 0;
  li {
    list-style: none;
    margin-bottom: 1rem;
    a, .segment {
      display: inline-block;
      width: 100%;
    }
    .segment {
      vertical-align: middle;
      .header {
        margin-bottom: 0;
      }
    }
  }
`;
