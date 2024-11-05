import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const { articleCard } = props;
  const title = articleCard.title;
  const author = articleCard.author;
  const topic = articleCard.topic;
  const article_img_url = articleCard.article_img_url;
  const votes = articleCard.votes;
  const created_at = articleCard.created_at;
  const article_id = articleCard.article_id;

  const dateObject = new Date(created_at);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="articleCard">
      <div className="articleCardHeader">
        <h2>
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </h2>
        <p>Written by {author}</p>
        <p>Topic: {topic}</p>
        <p>Votes: {votes}</p>
        <p>Date Uploaded: {formattedDate}</p>
      </div>
      <div className="articleImage">
        <img src={article_img_url}></img>
      </div>
    </main>
  );
}
