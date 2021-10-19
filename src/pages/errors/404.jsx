import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../styles/mixins";
import style from "./Error404.module.scss";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("15px")}
`;
const Error = styled.h1`
  font-size: 60px;
  font-weight: 700;
`;
const ErrorText = styled.p`
  font-size: 20px;
`;
const ErrorLink = styled.p`
  font-size: 16px;
`;

function Error404 () {
  return(
    <Content>
      <Error>404</Error>
      <ErrorText>Page not found!</ErrorText>
      <ErrorLink>Go to <NavLink to="/" className={style.link}>main page</NavLink></ErrorLink>
    </Content>
  );
}

export default Error404;