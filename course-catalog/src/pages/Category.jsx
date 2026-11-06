import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Category() {
  const { category } = useParams();
  const filteredCourses = courses.filter((course) => {
    return course.category.toLowerCase() === category.toLowerCase();
  });

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <main className="container page-section">
      <div className="page-heading">
        <span className="eyebrow">BROWSE BY LEVEL</span>
        <h1>{categoryName} Courses</h1>
        <p>Explore courses selected for your current learning level.</p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No courses found</h2>
          <p>There are currently no courses in this category.</p>
        </div>
      )}
    </main>
  );
}

export default Category;
