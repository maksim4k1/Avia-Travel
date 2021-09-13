import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";
import Ticket from "../Ticket";

const TicketsElement = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column;
  ${gap("21px")}
`;
const ClearTickets = styled.div`
  margin: 17px 0 0;
  font-size: 13px;
  text-align: center;
`;

function Tickets ({tickets}) {
  return(
    <TicketsElement>
      {
        tickets.length
        ? tickets.map((ticket, index) => {
          return <Ticket key={index} ticket={ticket}/>
        })
        : <ClearTickets>Билеты не найдены</ClearTickets>
      }
    </TicketsElement>
  );
}

export default Tickets;