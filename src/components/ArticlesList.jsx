import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";
import { useParams, useSearchParams } from "react-router-dom";

export default function ArticlesListByTopic() {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSortBy = searchParams.get("sort_by") || "created_at";
  const initialOrder = searchParams.get("order") || "desc";

  const [sortBy, setSortBy] = useState(initialSortBy);
  const [order, setOrder] = useState(initialOrder);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([]);

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    setSearchParams({ sort_by: sortBy, order: order });
    setIsLoading(true);
    setError(null);

    getAllArticles(topic, sortBy, order)
      .then((allArticlesData) => {
        setAllArticles(allArticlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [topic, sortBy, order, setSearchParams]);

  if (error) {
    return <Error status={error.status} message={error.response.data.msg} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="articlesList">
      <div className="articlesSort">
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSort}>
            <option value="created_at">Date Created</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>
        <label>
          Order:
          <select value={order} onChange={handleOrder}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>
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
