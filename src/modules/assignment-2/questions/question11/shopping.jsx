import React from "react";
import { useCart } from "./cartcontext";
const ShoppingCart = () => {
  const { cart, removeItem, clearCart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>TOTAL PRICE : {totalPrice} Rs</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};
export default ShoppingCart;
