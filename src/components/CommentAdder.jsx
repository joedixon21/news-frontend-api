import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

export default function CommentAdder(props) {
  const { allComments, setAllComments } = props;
  const { article_id } = useParams();

  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [successResponse, setSuccessReponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    postComment(article_id, body)
      .then((comment) => {
        setAllComments([comment, ...allComments]);
        setBody("");
        setError(null);
        setSuccessReponse("Comment posted successfully!");
        setTimeout(() => {
          setSuccessReponse(null);
        }, 3000);
      })
      .catch(() => {
        setError("Comment failed to post. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="commentAdder">
      <form onSubmit={handleSubmit}>
        <label name="postComment">
          <input
            type="text"
            onChange={handleChange}
            value={body}
            placeholder="Have your say..."
            disabled={isSubmitting}
          />
        </label>
        <button type="submit" disabled={!body || isSubmitting}>
          {isSubmitting ? "Posting Comment..." : "Post Comment"}
        </button>
      </form>
      {successResponse && <p>{successResponse}</p>}
      {error && <p>{error}</p>}
    </section>
  );
}
