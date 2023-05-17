import { useDispatch } from "react-redux";

import Button from "../button/button.component";

import { addItemToCart } from "../../store/cart/cart.reducer";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="clothing item"></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">€{price}</span>
      </div>
      <Button onClick={addToCart} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
