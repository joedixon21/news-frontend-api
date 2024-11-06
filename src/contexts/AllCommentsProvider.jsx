import { createContext, useState } from "react";

export const allCommentsContext = createContext();

const AllCommentsProvider = (props) => {
  const [allComments, setAllComments] = useState([]);
  const [successResponse, setSuccessResponse] = useState(null);

  return (
    <allCommentsContext.Provider
      value={{
        allComments,
        setAllComments,
        successResponse,
        setSuccessResponse,
      }}
    >
      {props.children}
    </allCommentsContext.Provider>
  );
};

export default AllCommentsProvider;
