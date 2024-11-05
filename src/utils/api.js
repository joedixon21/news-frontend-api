import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-api-r7r9.onrender.com/api",
});

export const getAllArticles = () => {
  return api
    .get(`/articles`)
    .then((response) => {
      return response.data;
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
