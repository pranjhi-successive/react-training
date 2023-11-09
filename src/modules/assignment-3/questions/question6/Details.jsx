import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
};

export default ProductDetail;
