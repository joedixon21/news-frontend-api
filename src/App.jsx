import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </>
  );
}
