# Northcoders News Website

## Summary of project:

This project is a C.R.U.D. application from a front-end perspective with the purpose of mimicking a real-world news platform (such as Reddit). It is a social news aggregation, web content rating and discussion website. Articles are divided into topics, and each article has user-curated ratings from upvotes and downvotes using the API. Users can also add comments about an article.

The hosted version of the website is available [here](https://news-app-joe-dixon.netlify.app/).

The corresponding back-end repo can be found [here](https://github.com/joedixon21/news-backend-API).

### Minimum versions required:

- node.js v22.2.0

### Cloning the repo:

Run the following in the terminal:

```bash
git clone https://github.com/joedixon21/news-frontend-api
cd nc-news-frontend-api # replace filename with where repo is saved locally
```

### Dependencies to install:

Dependencies to install for this project:

- Axios
- CORS
- React
  - react-router-dom

```bash
npm install axios cors react react-router-dom
```

### Enable CORS on back-end repo:

When making requests to your API from a React app, you will run into a Cross Origin Resource Sharing (CORS) error. The next thing to do is enable these requests in our back end.

- In your app.js file, require in the package:

```javascript
const cors = require("cors");
```

- In your app.js file, have your app use the CORS middleware before any of your other middleware or routers:

Run the following scripts in order to set up the database and seed the data:

```javascript
app.use(cors());
```

- Once you have made these changes, you will need to commit and push them to take effect in your hosted API:

```bash
git add package.json package-lock.json app.js
git commit -m 'allow cross origin resource sharing'
git push origin main
```

Check that your API has been re-deployed by going to the Events tab on Render. You should see a deploy for the commit you just made. If not, trigger a manual deploy.

# React + Vite

This repo provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).
