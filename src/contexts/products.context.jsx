import { useState, createContext, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  useEffect(() => {
    // const fetchShopItems = async() => { return await fetch data from DB }

    setProducts(PRODUCTS);
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
