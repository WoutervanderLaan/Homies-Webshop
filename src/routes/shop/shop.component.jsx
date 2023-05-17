import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { setCategories } from "../../store/categories/categories.reducer";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoriesAndDocuments("categories");
        dispatch(setCategories(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
