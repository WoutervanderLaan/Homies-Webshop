// import { useState, createContext, useEffect } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// export const CategoriesContext = createContext(null);

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const categoryMap = await getCategoriesAndDocuments();
//         setCategoriesMap(categoryMap);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getData();
//   }, []);

//   const value = { categoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
