import { useState } from "react";
import CommentAdder from "./CommentAdder";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

export default function CommentsManager() {
  const [allComments, setAllComments] = useState([]);
  const [successResponse, setSuccessResponse] = useState(null);

  return (
    <>
      <CommentsHeader />
      <CommentAdder allComments={allComments} setAllComments={setAllComments} />
      <CommentsList
        allComments={allComments}
        setAllComments={setAllComments}
        successResponse={successResponse}
        setSuccessResponse={setSuccessResponse}
      />
    </>
  );
}
