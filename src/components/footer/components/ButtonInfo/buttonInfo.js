import React from "react";
import css from "./styles.module.scss";

export default function ButtonInfo(props) {
  return (
    <div className={css.containerButton}>
      <i className={props.fafa} aria-hidden="true"></i>
      <h3>{props.titleButon}</h3>
    </div>
  );
}
