import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";
import { useParams } from "react-router-dom";

export default function ArticlesListByTopic() {
  const { topic_slug } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getAllArticles(topic_slug)
      .then((allArticlesData) => {
        setAllArticles(allArticlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topic_slug]);

  if (isError) {
    return <Error />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="articlesList">
      <ul>
        {allArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard articleCard={article} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
