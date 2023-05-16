import { CART_ACTION_TYPES } from "./cart.types";

export const setDisplayCart = (boolean) => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_CART_DISPLAY,
    payload: boolean,
  };
};

export const setCartItems = (newCartItems) => {
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return newCartItems;
};

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

export const removeItemFromCart = (cartItems, productToRemove, all = false) => {
  const newCartItems = removeCartItem(cartItems, productToRemove, all);
  return newCartItems;
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
