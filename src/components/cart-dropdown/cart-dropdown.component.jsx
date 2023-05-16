import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link className="shopping-cart-container" to="/checkout">
        <Button>CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
