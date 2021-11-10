import React, { useContext } from "react";
import css from "./styles.module.scss";
import "font-awesome/css/font-awesome.min.css";
import { CartContext } from "../../context/cartContext";

export default function Nav() {
  const [cart] = useContext(CartContext);

  //In this nav, it's use context for cart and classes for responsive hamburger. (see style)

  return (
    <>
      <div className={css.containerNav}>
        <div className={css.navUpper}>
          <svg
            className={css.hamburger}
            style={{ fill: "#000" }}
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20" />
            <rect y="30" width="100" height="20" />
            <rect y="60" width="100" height="20" />
          </svg>
          <img src="/corebiz.png" alt="logo" />
          <div className={css.searchBar}>
            <input placeholder="¿Que estas buscando?"></input>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className={css.acount}>
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
            <p>Mi cuenta</p>
          </div>
          <div className={css.cart}>
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            <p>{cart}</p>
          </div>
        </div>
        <div className={css.navBottom}>
          <div className={css.searchBar}>
            <input placeholder="¿Que estas buscando?"></input>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}
