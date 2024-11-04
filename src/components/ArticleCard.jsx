export default function ArticleCard(props) {
  const { articleCard } = props;

  const title = articleCard.title;
  const author = articleCard.author;
  const topic = articleCard.topic;
  const article_img_url = articleCard.article_img_url;
  const votes = articleCard.votes;
  const date = articleCard.created_at;

  return (
    <div className="articleCard">
      <div className="articleCardHeader">
        <h2>{title}</h2>
        <p>Written by {author}</p>
        <p>Topic: {topic}</p>
        <p>Votes: {votes}</p>
        <p>Date Uploaded: {date}</p>
      </div>
      <div className="articleImage">
        <img src={article_img_url}></img>
      </div>
    </div>
  );
}
