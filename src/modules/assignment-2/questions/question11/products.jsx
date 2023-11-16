import React from "react";
import { useCart } from "./cartcontext";
const Product = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <h2>Price : {product.price} Rs.</h2>
      <button onClick={() => addItem(product)}>Add To Cart</button>
    </div>
  );
};
export default Product;
