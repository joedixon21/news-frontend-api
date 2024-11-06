import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-api-r7r9.onrender.com/api",
});

export const getAllArticles = () => {
  return api
    .get(`/articles`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      return error;
    });
};

export const getSingleArticle = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      return error;
    });
};

export const getAllComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      return error;
    });
};

export const updateArticleVotes = (article_id, inc) => {
  const inc_votes = inc ? 1 : -1;
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      return error;
    });
};

export const postComment = (article_id, body) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: "cooljmessy",
      body: body,
    })
    .then((response) => {
      return response.data.comment;
    })
    .catch((error) => {
      return error;
    });
};
