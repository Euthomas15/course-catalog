import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => {
    return course.slug === slug;
  });

  if (!course) {
    return (
      <main className="container page-section">
        <div className="empty-state">
          <span className="eyebrow">COURSE CATALOG</span>
          <h1>Course not found</h1>
          <p>Sorry, the course you're looking for doesn't exist.</p>
          <button className="primary-button" onClick={() => navigate("/")}>
            Browse all courses
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container page-section detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <span aria-hidden="true">←</span> Back
      </button>

      <article className="detail-card">
        <div className="detail-topline">
          <span className={`category-badge ${course.category.toLowerCase()}`}>
            {course.category}
          </span>
          <span className="detail-duration">◷ &nbsp;{course.duration}</span>
        </div>

        <span className="eyebrow">COURSE OVERVIEW</span>
        <h1>{course.title}</h1>
        <p className="detail-description">{course.description}</p>

        <div className="topics-section">
          <h2>What you'll learn</h2>
          <ul className="topic-list">
            {course.topics.map((topic, index) => (
              <li key={`${course.id}-${index}`}>
                <span className="topic-check" aria-hidden="true">✓</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}

export default CourseDetails;
