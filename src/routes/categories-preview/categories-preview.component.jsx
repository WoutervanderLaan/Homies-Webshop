import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
