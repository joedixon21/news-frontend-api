import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";

export default function ArticlesList() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getAllArticles()
      .then((allArticlesData) => {
        setAllArticles(allArticlesData.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <Error />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="articlesList">
      <ul>
        {allArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard articleCard={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
