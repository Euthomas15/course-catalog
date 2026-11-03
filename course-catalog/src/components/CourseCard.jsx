import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.slug}`}>
      <article>
        <span>{course.category}</span>
        <h2>{course.title}</h2>
        <p>{course.duration}</p>
      </article>
    </Link>
  );
}

export default CourseCard;