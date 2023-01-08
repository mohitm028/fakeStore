import React, { useState } from "react";
const AddedToCart = React.createContext();
const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState(0);
  return (
    <AddedToCart.Provider value={{ cartData, setCartData }}>
      {children}
    </AddedToCart.Provider>
  );
};

export { AddedToCart, CartDataProvider };
