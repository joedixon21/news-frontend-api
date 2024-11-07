import { Link } from "react-router-dom";

export default function Header() {
  const allTopics = ["cooking", "coding", "football"];

  return (
    <header className="header">
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home</Link>
        {allTopics.map((topic) => {
          return (
            <Link key={topic} to={`/topics/${topic}`}>
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
