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
      <Sort
        title="Количество пересадок"
        inputs={[
          {type: "checkbox", body: "Все", name: "all", onChangeHandler: () => {}},
          {type: "checkbox", body: "Без пересадок", name: "no", onChangeHandler: () => {}},
          {type: "checkbox", body: "1 пересадка", name: "1", onChangeHandler: () => {}},
          {type: "checkbox", body: "2 пересадки", name: "2", onChangeHandler: () => {}},
          {type: "checkbox", body: "3 пересадки", name: "3", onChangeHandler: () => {}},
        ]}
      />
      <Sort
        title="Сортировать билеты"
        inputs={[
          {type: "radio", body: "Все", name: "sort", onChangeHandler: () => {}},
          {type: "radio", body: "По цене (возраст.)", name: "sort", onChangeHandler: () => {}},
          {type: "radio", body: "По цене (убыв.)", name: "sort", onChangeHandler: () => {}},
          {type: "radio", body: "Время в полете (возраст.)", name: "sort", onChangeHandler: () => {}},
          {type: "radio", body: "Время в полете (убыв.)", name: "sort", onChangeHandler: () => {}},
        ]}
      />
    </FilterElement>
  );
}

export default Filter;