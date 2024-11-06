import { useEffect, useState } from "react";
import { getAllComments } from "../utils/api";
import Error from "./Error";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";

export default function CommentsList(props) {
  const { allComments, setAllComments } = props;
  const { article_id } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getAllComments(article_id)
      .then((allCommentsData) => {
        setAllComments(allCommentsData);
        setIsLoading(false);
      })
      .catch(() => {
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
    <div className="commentsList">
      <ul>
        {allComments.map((comment) => {
          return <CommentCard key={comment.comment_id} commentCard={comment} />;
        })}
      </ul>
    </div>
  );
}
