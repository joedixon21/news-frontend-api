import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import CommentsProvider from "./CommentsProvider";
import SingleArticleVotes from "./SingleArticleVotes";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState("");
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getSingleArticle(article_id)
      .then((singleArticleData) => {
        setSingleArticle(singleArticleData);
        setVotes(singleArticleData.votes);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [article_id]);

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
          <SingleArticleVotes
            article_id={article_id}
            votes={votes}
            setVotes={setVotes}
          />
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
