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

const removeCartItem = (cartItems, productToRemove, all) => {
  return cartItems
    .map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - (all ? item.quantity : 1) }
        : item
    )
    .filter((item) => item.quantity > 0);
};

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const cartItemCounter = cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    setCartCounter(cartItemCounter);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotalPrice = cartItems.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0);
    setCartTotalPrice(newCartTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove, all = false) => {
    setCartItems(removeCartItem(cartItems, productToRemove, all));
  };

  const value = {
    displayCart,
    setDisplayCart,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCounter,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
