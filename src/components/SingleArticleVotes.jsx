import { useState } from "react";
import { updateArticleVotes } from "../utils/api";

export default function SingleArticleVotes(props) {
  const { article_id, votes, setVotes } = props;
  const [error, setError] = useState(null);

  const handleVote = (inc) => {
    const updatedVotes = inc ? votes + 1 : votes - 1;
    setVotes(updatedVotes);

    updateArticleVotes(article_id, inc)
      .then((updatedArticleData) => {
        setVotes(updatedArticleData.votes);
        setError(null);
      })
      .catch((error) => {
        setVotes(votes);
        setError("Unable to vote at this time. Please try again later.");
      });
  };

  return (
    <>
      <p>Votes: {votes}</p>
      {error && <p>{error}</p>}
      <button onClick={() => handleVote(true)}>+1</button>
      <button onClick={() => handleVote(false)}>-1</button>
    </>
  );
}
