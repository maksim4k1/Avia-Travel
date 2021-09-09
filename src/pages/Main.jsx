import React from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Tickets from "../components/Tickets";
import { gap } from "../styles/mixins";
import tickets from "../db/index";

const MainElement = styled.div`
  display: flex;
  ${gap("21px")}
`;

function Main () {
  return(
    <MainElement>
      <Filter/>
      <Tickets tickets={tickets}/>
    </MainElement>
  );
}

export default Main;