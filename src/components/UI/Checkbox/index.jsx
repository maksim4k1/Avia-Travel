import React from "react";
import style from "./Checkbox.module.scss";

function Checkbox ({body, name, id, onChangeHandler}) {
  return(
    <>
    <input type="checkbox" className={style.input} name={name} id={id} onChange={onChangeHandler}/>
    <label className={style.label} htmlFor={id}>
      {body}
    </label>
    </>
  );
}

export default Checkbox;