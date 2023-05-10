import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        return (
          <CategoryPreview
            key={category}
            title={category}
            producstArray={categoriesMap[category]}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
