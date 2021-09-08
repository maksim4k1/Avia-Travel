import React from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import { gap } from "../styles/mixins";

const MainElement = styled.div`
  display: flex;
  ${gap("21px")}
`;

function Main () {
  return(
    <MainElement>
      <Filter/>
    </MainElement>
  );
}

export default Main;