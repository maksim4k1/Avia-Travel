import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";
import Ticket from "../Ticket";

const TicketsElement = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("21px")}
`;

function Tickets ({tickets}) {
  return(
    <TicketsElement>
      {
        tickets.map((ticket, index) => {
          return <Ticket key={index} ticket={ticket}/>
        })
      }
    </TicketsElement>
  );
}

export default Tickets;