import React from "react";
import style from "./Radio.module.scss";

function Radio ({body, name, id, value, onChangeHandler}) {
  return(
    <>
      <input type="radio" className={style.input} name={name} id={id} value={value} onChange={onChangeHandler}/>
      <label className={style.label} htmlFor={id}>
        {body}
      </label>
    </>
  );
}

export default Radio;