import React from "react";
import style from "./Radio.module.scss";

function Radio ({body, name, id, onChangeHandler}) {
  return(
    <>
      <input type="radio" className={style.input} name={name} id={id} onChange={onChangeHandler}/>
      <label className={style.label} htmlFor={id}>
        {body}
      </label>
    </>
  );
}

export default Radio;