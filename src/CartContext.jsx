import { createContext, useContext, useState } from "react";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove item by index or id
  const removeItem = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
