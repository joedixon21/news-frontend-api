import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-api-r7r9.onrender.com/api",
});

const getAllArticles = () => {
  return api
    .get(`/articles`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default getAllArticles;
