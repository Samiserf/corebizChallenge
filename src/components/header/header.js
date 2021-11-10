import React from "react";
import css from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Header() {
  // Library Carrousel.

  return (
    <section className={`${css.portada_contenido} portada_contenido`}>
      <Carousel showArrows={true} showThumbs={false}>
        <div>
          <img alt="imagenHeader1" src="header.PNG" />
        </div>
        <div>
          <img alt="imagenHeader2" src="header.PNG" />
        </div>
        <div>
          <img alt="imagenHeader3" src="header.PNG" />
        </div>
      </Carousel>
    </section>
  );
}
