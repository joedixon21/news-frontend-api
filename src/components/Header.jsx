import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/topics/cooking">Cooking</Link>
        <Link to="/topics/coding">Coding</Link>
        <Link to="/topics/football">Football</Link>
      </nav>
    </header>
  );
}
