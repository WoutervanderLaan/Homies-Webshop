import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectDisplayCart = createSelector(
  [selectCartReducer],
  (cart) => cart.displayCart
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCounter = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0)
);
