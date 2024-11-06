import { useContext, useState } from "react";
import { allCommentsContext } from "../contexts/AllCommentsProvider";
import { deleteComment } from "../utils/api";

export default function CommentDeleter(props) {
  const { allComments, setAllComments, setSuccessResponse } =
    useContext(allCommentsContext);
  const { comment_id, author } = props;
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentUser = "cooljmessy";
  if (author !== currentUser) return null;

  const handleDelete = () => {
    setIsDeleting(true);
    setError(null);

    deleteComment(comment_id)
      .then(() => {
        const updatedComments = allComments.filter((comment) => {
          return comment.comment_id !== parseInt(comment_id);
        });
        setAllComments(updatedComments);
        setSuccessResponse("Comment deleted successfully!");
        setTimeout(() => {
          setSuccessResponse(null);
        }, 3000);
      })
      .catch((error) => {
        setError("Couldn't delete comment. Please try again later.");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button
        className="deleteComment"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete Comment"}
      </button>
    </div>
  );
}
