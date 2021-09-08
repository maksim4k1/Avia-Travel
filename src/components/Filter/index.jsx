import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";
import Sort from "../Sort";

const FilterElement = styled.div`
  width: 100%;
  max-width: 232px;
  display: flex;
  flex-flow: column;
  ${gap("20px")}
`;

function Filter () {
  return(
    <FilterElement>
      <Sort title="Количество пересадок"/>
      <Sort title="Сортировать билеты"/>
    </FilterElement>
  );
}

export default Filter;