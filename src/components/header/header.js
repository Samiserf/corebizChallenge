import React from "react";
import css from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Header() {
  return (
    <section className={`${css.portada_contenido} portada_contenido`}>
      <Carousel showArrows={true} showThumbs={false}>
        <div>
          <img src="header.PNG" />
        </div>
        <div>
          <img src="header.PNG" />
        </div>
        <div>
          <img src="header.PNG" />
        </div>
      </Carousel>
    </section>
  );
}
