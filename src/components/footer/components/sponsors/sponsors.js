import React from "react";
import css from "./styles.module.scss";

export default function Sponsors(props) {
  return (
    <div className={css.containerSponsors}>
      <span>{props.by}</span>
      <img src={props.img} alt="sponsor" />
    </div>
  );
}
