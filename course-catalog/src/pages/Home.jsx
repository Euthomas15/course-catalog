import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <main>
      <section className="hero container">
        <span className="eyebrow">YOUR NEXT SKILL STARTS HERE</span>
        <h1>Learn at your <span>own pace.</span></h1>
        <p>Explore practical courses and build the skills you need to grow as a developer.</p>
        <div className="hero-meta">
          <span><strong>{courses.length}</strong> focused courses</span>
          <span className="meta-dot">·</span>
          <span>Beginner to intermediate</span>
        </div>
      </section>

      <section className="catalog-section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE CATALOG</span>
            <h2>Explore all courses</h2>
          </div>
          <p>Choose a course and take the next step in your learning journey.</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
