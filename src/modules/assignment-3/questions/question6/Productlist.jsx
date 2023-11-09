import React from "react";
import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>

      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </div>
  );
};
export default ProductList;
