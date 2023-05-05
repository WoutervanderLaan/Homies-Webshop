import { useContext } from "react";

import Button from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
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
