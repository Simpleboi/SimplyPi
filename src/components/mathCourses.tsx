import { Course } from "../pages/courses";
import { courses } from "../data/courseData";

export const MathCourses = () => {
  return (
    <section className="course-main">
      {courses.map((course) => (
        <Course
          key={course.id}
          title={course.title}
          modDate={course.modDate}
          imageUrl={course.imageUrl}
          courseDesc={course.courseDesc}
        />
      ))}
    </section>
  );
};
