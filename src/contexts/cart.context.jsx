import { createContext, useReducer } from "react";

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

export const CART_ACTION_TYPES = {
  TOGGLE_CART_DISPLAY: "TOGGLE_CART_DISPLAY",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  displayCart: false,
  cartItems: [],
  cartCounter: 0,
  cartTotalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_DISPLAY:
      return {
        ...state,
        displayCart: !state.displayCart,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { displayCart, cartItems, cartCounter, cartTotalPrice } = state;

  const setDisplayCart = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART_DISPLAY });
  };
  const setCartItems = (newCartItems, newCartCounter, newCartTotalPrice) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCounter: newCartCounter,
        cartTotalPrice: newCartTotalPrice,
      },
    });
  };

  const getCounterAndTotalPrize = (itemsArray) => {
    const newCartCounter = itemsArray.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    const newCartTotalPrice = itemsArray.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0);

    return [newCartCounter, newCartTotalPrice];
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    const counterAndTotalPrize = getCounterAndTotalPrize(newCartItems);
    setCartItems(newCartItems, ...counterAndTotalPrize);
  };

  const removeItemFromCart = (productToRemove, all = false) => {
    const newCartItems = removeCartItem(cartItems, productToRemove, all);
    const counterAndTotalPrize = getCounterAndTotalPrize(newCartItems);
    setCartItems(newCartItems, ...counterAndTotalPrize);
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
