import { formatDate } from "../utils/formatDate";
import CommentDeleter from "./CommentDeleter";

export default function CommentCard(props) {
  const { commentCard } = props;

  const votes = commentCard.votes;
  const created_at = formatDate(commentCard.created_at);
  const author = commentCard.author;
  const body = commentCard.body;
  const comment_id = commentCard.comment_id;

  return (
    <li className="commentCard">
      <div className="commentCardHeader">
        <h3 className="commentAuthor">{author}</h3>
        <p className="commentDate">Posted: {created_at}</p>
      </div>
      <div className="commentBody">
        <p className="commentText">{body}</p>
      </div>
      <div className="commentFooter">
        <p className="commentVotes">Votes: {votes}</p>
      </div>
      <CommentDeleter comment_id={comment_id} author={author} />
    </li>
  );
}
