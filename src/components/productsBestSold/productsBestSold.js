import React, { useContext } from "react";
import css from "./styles.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CartContext } from "../../context/cartContext";
import ReactStars from "react-stars";

export default function ProductsBestSold() {
  const [products, setProducts] = React.useState();
  const [cart, setCart] = useContext(CartContext);

  React.useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, []);

  console.log(products);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const incrementCart = () => {
    localStorage.setItem(
      "countCart",
      parseInt(localStorage.getItem("countCart"), 10) + 1
    );
    setCart(localStorage.getItem("countCart"));
  };

  if (!products) {
    return "Loading";
  } else {
    return (
      <section className={`${css.ProductsBestSold} ProductsBestSold`}>
        <div className={css.containerProducts}>
          <h3>Más Vendidos</h3>
          <hr />
          <div className={css.products}>
            <Carousel
              ssr
              partialVisbile
              deviceType="desktop"
              itemClass="image-item"
              responsive={responsive}
            >
              {products.map((product) => {
                return (
                  <div key={product.productId} className={css.containerCard}>
                    <div className={css.topSide}>
                      <img src={product.imageUrl} alt="imagenProducto" />
                    </div>
                    <div className={css.bottomSide}>
                      <p>{product.productName}</p>
                      <div className={css.rating}>
                        <ReactStars count={5} size={24} color2={"#f8475f"} />
                      </div>
                      <span>
                        de ${product.listPrice ? product.listPrice : "-"}
                      </span>
                      <h2>por ${product.price}</h2>
                      {product.installments.length > 0 && (
                        <span>
                          o en {product.installments.quantity}x de R ${" "}
                          {product.installments.value}
                        </span>
                      )}
                      <button onClick={incrementCart}>COMPRAR</button>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
