import { useParams } from "react-router-dom";
// import { courses } from "../data/courseData";
import { Alg1 } from "./courses/algebra1";

// Mapping course IDs to their respective components
const courseComponents: { [key: string]: React.FC } = {
  algebra1: Alg1,
};

export const CourseDetail = () => {
  // Get course ID from URL
  const { courseId } = useParams();

  // ✅ Get the component associated with this course ID
  const CourseComponent = courseComponents[courseId || ""];

  if (!CourseComponent) {
    return <h2>Course Not Found</h2>; // Handle invalid courses
  }

  return (
    <div className="course-detail">
      <CourseComponent />
    </div>
  );
};
