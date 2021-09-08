import React from "react";
import styled from "styled-components";

const SortElement = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-flow: column;
  background: var(--color-white);
  box-shadow: var(--main-shadow);
  border-radius: 5px;
`;
const Title = styled.h4`
  margin: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

function Sort ({title}) {
  return(
    <SortElement>
      <Title>{title}</Title>
    </SortElement>
  );
}

export default Sort;