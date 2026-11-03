import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <main>
        <section>
            <h1>Learn at your own pace.</h1>
            <p>
            Explore our courses and build the skills you need
            to grow as a developer.
            </p>
        </section>

        <section>
            <div>
                {courses.map((course) => {
                return <CourseCard key={course.id} course={course} />;
                })}
            </div>
        </section>
    </main>
  );
}

export default Home;