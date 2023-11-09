import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeItem = (productid) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productid));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
