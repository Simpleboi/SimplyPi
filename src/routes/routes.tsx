import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Blog } from "../pages/blog";
import { About } from "../pages/about";
import { Login } from "../auth/login";
import { Signup } from "../auth/signup";
import { Contact } from "../pages/contact";
import { CourseDetail } from "../pages/courseDetails";
import { MathCourses } from "../components/mathCourses";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<MathCourses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dynamic Routes for Courses */}
      <Route path="/courses/:courseId" element={<CourseDetail />} />
    </Routes>
  );
};
