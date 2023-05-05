import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { displayCart, setDisplayCart, cartCounter } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setDisplayCart(!displayCart);
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCounter}</span>
    </div>
  );
};

export default CartIcon;
