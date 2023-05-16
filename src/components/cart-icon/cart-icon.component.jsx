import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { setDisplayCart } from "../../store/cart/cart.action";
import {
  selectCartCounter,
  selectDisplayCart,
} from "../../store/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCounter = useSelector(selectCartCounter);
  const cartDisplay = useSelector(selectDisplayCart);

  const toggleCartDisplay = () => dispatch(setDisplayCart(!cartDisplay));

  return (
    <div className="cart-icon-container" onClick={toggleCartDisplay}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCounter}</span>
    </div>
  );
};

export default CartIcon;
