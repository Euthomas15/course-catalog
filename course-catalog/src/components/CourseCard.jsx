import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link className="course-card" to={`/courses/${course.slug}`}>
      <div className="course-card-top">
        <span className={`category-badge ${course.category.toLowerCase()}`}>
          {course.category}
        </span>
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
      <h2>{course.title}</h2>
      <div className="course-card-bottom">
        <span className="duration-icon" aria-hidden="true">◷</span>
        <span>{course.duration}</span>
      </div>
    </Link>
  );
}

export default CourseCard;
