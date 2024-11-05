export default function CommentCard(props) {
  const { commentCard } = props;

  const votes = commentCard.votes;
  const created_at = commentCard.created_at;
  const author = commentCard.author;
  const body = commentCard.body;

  const dateObject = new Date(created_at);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="commentCard">
      <div className="commentCardHeader">
        <h3 className="commentAuthor">{author}</h3>
        <p className="commentDate">Posted: {formattedDate}</p>
      </div>
      <div className="commentBody">
        <p className="commentText">{body}</p>
      </div>
      <div className="commentFooter">
        <p className="commentVotes">Votes: {votes}</p>
      </div>
    </div>
  );
}
