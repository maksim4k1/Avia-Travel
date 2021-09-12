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
  const [transfers, setTransfers] = useState(["all"]);
  const [sort, setSort] = useState("all");
  const [tickets, setTickets] = useState(ticketsArray);

  useEffect(() => {
    const filteredTickets = [...transfers].reduce((defVal, item) => {
      if(item === "all"){
        return [...ticketsArray];
      }
      const filteredArray = ticketsArray.filter(el => el.transfers.length === Number(item));
      return [...defVal, ...filteredArray];
    }, []);
    if(sort === "priceUp"){
      setTickets(filteredTickets.sort((a, b) => a.price - b.price));
    } else if(sort === "priceDown"){
      setTickets(filteredTickets.sort((a, b) => b.price - a.price));
    } else if(sort === "timeUp"){
      setTickets(filteredTickets.sort((a, b) => a.wayMinutes - b.wayMinutes));
    } else if(sort === "timeDown"){
      setTickets(filteredTickets.sort((a, b) => b.wayMinutes - a.wayMinutes));
    } else {
      setTickets(filteredTickets);
    }
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