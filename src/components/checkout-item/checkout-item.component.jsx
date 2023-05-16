import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  setCartItems,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const clearItemsHandler = () =>
    dispatch(setCartItems(removeItemFromCart(cartItems, item, true)));
  const addItemHandler = () =>
    dispatch(setCartItems(addItemToCart(cartItems, item)));
  const removeItemHandler = () =>
    dispatch(setCartItems(removeItemFromCart(cartItems, item)));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemsHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
