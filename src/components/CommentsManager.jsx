import CommentAdder from "./CommentAdder";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

export default function CommentsManager() {
  return (
    <>
      <CommentsHeader />
      <CommentAdder />
      <CommentsList />
    </>
  );
}
