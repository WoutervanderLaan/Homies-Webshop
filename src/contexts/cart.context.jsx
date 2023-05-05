import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  if (!existingCartItem)
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    const cartItemCounter = cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    setCartCounter(cartItemCounter);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    displayCart,
    setDisplayCart,
    cartItems,
    addItemToCart,
    cartCounter,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
