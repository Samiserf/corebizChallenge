export function getProducts() {
  const objectProducts = null;
  fetch("https://corebiz-test.herokuapp.com/api/v1/products")
    .then((res) => res.json())
    .then((res) => (objectProducts = res))
    .catch((err) => console.error(err));
  return objectProducts;
}
