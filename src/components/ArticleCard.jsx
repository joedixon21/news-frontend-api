import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export default function ArticleCard(props) {
  const { articleCard } = props;
  const title = articleCard.title;
  const author = articleCard.author;
  const topic = articleCard.topic;
  const article_img_url = articleCard.article_img_url;
  const votes = articleCard.votes;
  const created_at = formatDate(articleCard.created_at);
  const article_id = articleCard.article_id;

  return (
    <main className="articleCard">
      <div className="articleCardHeader">
        <h2>
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </h2>
        <p>Written by {author}</p>
        <p>Topic: {topic}</p>
        <p>Votes: {votes}</p>
        <p>Date Uploaded: {created_at}</p>
      </div>
      <div className="articleImage">
        <img src={article_img_url}></img>
      </div>
    </main>
  );
}
