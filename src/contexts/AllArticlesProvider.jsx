import { createContext, useState } from "react";

export const allArticlesContext = createContext();

const AllArticlesProvider = (props) => {
  const [allArticles, setAllArticles] = useState("");
  return (
    <allArticlesContext.Provider value={{ allArticles, setAllArticles }}>
      {props.children}
    </allArticlesContext.Provider>
  );
};

export default AllArticlesProvider;
