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

function Filter ({changeTransferHandler, changeSortHandler, checkboxes}) {
  return(
    <FilterElement>
      <Sort
        title="Количество пересадок"
        inputs={[
          {type: "checkbox", body: "Все", name: "transfers", value: "all", checked: checkboxes.find(item => item === "all") ? true : false, onChangeHandler: changeTransferHandler},
          {type: "checkbox", body: "Без пересадок", name: "transfers", value: 0, checked: checkboxes.find(item => item === "0") ? true : false, onChangeHandler: changeTransferHandler},
          {type: "checkbox", body: "1 пересадка", name: "transfers", value: 1, checked: checkboxes.find(item => item === "1") ? true : false, onChangeHandler: changeTransferHandler},
          {type: "checkbox", body: "2 пересадки", name: "transfers", value: 2, checked: checkboxes.find(item => item === "2") ? true : false, onChangeHandler: changeTransferHandler},
          {type: "checkbox", body: "3 пересадки", name: "transfers", value: 3, checked: checkboxes.find(item => item === "3") ? true : false, onChangeHandler: changeTransferHandler},
        ]}
      />
      <Sort
        title="Сортировать билеты"
        inputs={[
          {type: "radio", body: "Все", name: "sort", value: "all", onChangeHandler: changeSortHandler},
          {type: "radio", body: "По цене (возраст.)", name: "sort", value: "priceUp", onChangeHandler: changeSortHandler},
          {type: "radio", body: "По цене (убыв.)", name: "sort", value: "priceDown", onChangeHandler: changeSortHandler},
          {type: "radio", body: "Время в полете (возраст.)", name: "sort", value: "timeUp", onChangeHandler: changeSortHandler},
          {type: "radio", body: "Время в полете (убыв.)", name: "sort", value: "timeDown", onChangeHandler: changeSortHandler},
        ]}
      />
    </FilterElement>
  );
}

export default Filter;