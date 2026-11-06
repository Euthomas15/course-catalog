import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container page-section">
      <div className="empty-state">
        <span className="eyebrow">404 ERROR</span>
        <h1>Page not found</h1>
        <p>The page you're looking for may have moved or doesn't exist.</p>
        <Link className="primary-button" to="/">Return to all courses</Link>
      </div>
    </main>
  );
}

export default NotFound;
