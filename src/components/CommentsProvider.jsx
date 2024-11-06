import { useState } from "react";
import CommentAdder from "./CommentAdder";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

export default function CommentsProvider() {
  const [allComments, setAllComments] = useState([]);

  return (
    <>
      <CommentsHeader />
      <CommentAdder allComments={allComments} setAllComments={setAllComments} />
      <CommentsList allComments={allComments} setAllComments={setAllComments} />
    </>
  );
}
