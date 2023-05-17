import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const dispatch = useDispatch();

  const clearItemsHandler = () => dispatch(clearItemFromCart(item));
  const addItemHandler = () => dispatch(addItemToCart(item));
  const removeItemHandler = () => dispatch(removeItemFromCart(item));

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
