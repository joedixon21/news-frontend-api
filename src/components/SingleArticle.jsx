import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import CommentsProvider from "./CommentsProvider";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getSingleArticle(article_id)
      .then((singleArticleData) => {
        setSingleArticle(singleArticleData);
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
    <>
      <article className="singleArticle">
        <h2>{singleArticle.title}</h2>
        <div>
          <p>Votes: {singleArticle.votes}</p>
        </div>
        <div className="singleArticleImage">
          <img src={singleArticle.article_img_url}></img>
        </div>
        <div>
          <p>Written by: {singleArticle.author}</p>
          <p>{singleArticle.body}</p>
        </div>
      </article>
      <CommentsProvider />
    </>
  );
}
