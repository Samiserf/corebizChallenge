import React from "react";
import css from "./styles.module.scss";
import ButonInfo from "./components/ButtonInfo/buttonInfo";
import Sponsors from "./components/sponsors/sponsors";

export default function Footer() {
  return (
    <section className={`${css.footer} footer`}>
      <div className={css.ubication}>
        <h2>Ubicación</h2>
        <hr />
        {/* <div className="line">.asdsadsd</div> */}
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p> +55 11 3090 1039</p>
      </div>
      <div className={css.contact}>
        <ButonInfo fafa="fa fa-envelope" titleButon="CONTÁCTANOS" />
        <ButonInfo
          fafa="fa fa-headphones"
          titleButon="HABLA CON UN CONSULTOR"
        />
      </div>
      <div className={css.sponsors}>
        <Sponsors by="Desarrollado por" img="/corebiz.svg" />
        <Sponsors by="Powered by" img="vtex.svg" />
      </div>
    </section>
  );
}
