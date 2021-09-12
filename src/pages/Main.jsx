import React, { useEffect } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Tickets from "../components/Tickets";
import { gap } from "../styles/mixins";
import ticketsArray from "../db/index";
import { useState } from "react/cjs/react.development";

const MainElement = styled.div`
  display: flex;
  ${gap("21px")}
`;

function Main () {
  const [transfers, setTransfers] = useState([]);
  const [sort, setSort] = useState("all");
  const [tickets, setTickets] = useState(ticketsArray);

  useEffect(() => {
    const filteredTickets = [...tickets];
    filteredTickets.filter(item => transfers.find(el => item.transfers.length === el) !== undefined);
    setTickets(filteredTickets);
    console.log(filteredTickets)
    console.log(transfers, sort);
  }, [transfers, sort]);
  
  const changeTransferHandler = (event) => {
    if(event.target.value === "all"){
      setTransfers([event.target.value]);
    } else{
      if(!transfers.find(item => item === event.target.value)){
        if(transfers.find(item => item === "all")){
          setTransfers([event.target.value]);
        } else{
          setTransfers([...transfers, event.target.value]);
        }
      } else{
        const array = [...transfers];
        array.splice(transfers.findIndex(item => item === event.target.value), 1);
        setTransfers(array);
      }
    }
  }
  const changeSortHandler = (event) => {
    setSort(event.target.value);
  }

  return(
    <MainElement>
      <Filter changeTransferHandler={changeTransferHandler} checkboxes={transfers} changeSortHandler={changeSortHandler}/>
      <Tickets tickets={tickets}/>
    </MainElement>
  );
}

export default Main;