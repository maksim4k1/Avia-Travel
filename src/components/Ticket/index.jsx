import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";

const TicketElement = styled.li`
  width: 100%;
  height: 147px;
  padding: 26px 20px 32px;
  display: flex;
  flex-flow: column;
  ${gap("26px")}
  background: var(--color-white);
  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;
const Price = styled.div`
  color: var(--color-blue);
  font-size: 24px;
  font-weight: 600;
`;
const Info = styled.ul`
  display: flex;
  justify-content: space-between;
  ${gap("20px")}
`;
const InfoItem = styled.li`
  width: 141px;
`;
const InfoTitle = styled.h5`
  color: var(--color-grey);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
`;

function Ticket ({ticket}) {
  return(
    <TicketElement>
      <Price>{Math.floor(ticket.price / 1000)} {ticket.price % 1000} Р</Price>
      <Info>
        <InfoItem>
          <InfoTitle>Авиакомпания</InfoTitle>
          <Text>{ticket.name}</Text>
        </InfoItem>
        <InfoItem>
          <InfoTitle>В пути</InfoTitle>
          <Text>{Math.floor(ticket.wayMinutes / 60)}ч {ticket.wayMinutes % 60}м</Text>
        </InfoItem>
        <InfoItem>
          <InfoTitle>{ticket.transfers.length ? ticket.transfers.length + ` пересадк${ticket.transfers.length > 1 ? "и" : "а"}` : "Без пересадок"}</InfoTitle>
          <Text>{ticket.transfers.join(", ")}</Text>
        </InfoItem>
      </Info>
    </TicketElement>
  );
}

export default Ticket;