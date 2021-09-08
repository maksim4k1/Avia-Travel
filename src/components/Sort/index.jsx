import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import Checkbox from "../UI/Checkbox";
import Radio from "../UI/Radio";

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

function Sort ({title, inputs}) {
  return(
    <SortElement>
      <Title>{title}</Title>
      {
        inputs.map((input, index) => {
          if(input.type === "checkbox"){
            return <Checkbox key={index} body={input.body} name={input.name} id={nanoid()} onChangeHandler={input.onChangeHandler}/>
          } else{
            return <Radio key={index} body={input.body} name={input.name} id={nanoid()} onChangeHandler={input.onChangeHandler}/>
          }
        })
      }
    </SortElement>
  );
}

export default Sort;