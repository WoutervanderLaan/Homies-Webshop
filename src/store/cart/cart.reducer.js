import { createSlice } from "@reduxjs/toolkit";

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

const removeCartItem = (cartItems, productToRemove, all = false) => {
  return cartItems
    .map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - (all ? item.quantity : 1) }
        : item
    )
    .filter((item) => item.quantity > 0);
};

const INITIAL_STATE = {
  displayCart: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setDisplayCart(state, action) {
      state.displayCart = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload, true);
    },
  },
});

export const {
  setDisplayCart,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
