import React from "react";
import style from "./Checkbox.module.scss";

function Checkbox ({body, name, id, onChangeHandler, value, checked}) {
  return(
    <>
    <input type="checkbox" className={style.input} name={name} value={value} checked={checked} id={id} onChange={onChangeHandler}/>
    <label className={style.label} htmlFor={id}>
      {body}
    </label>
    </>
  );
}

export default Checkbox;