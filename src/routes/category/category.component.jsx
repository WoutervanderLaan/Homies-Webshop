import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";
import { useSelector } from "react-redux";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  if (!products) return;

  return (
    <>
      <h2 className="title">
        {category.slice(0, 1).toUpperCase() + category.slice(1)}
      </h2>
      <div className="category-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
