import { Routes, Route } from "react-router-dom";
import { Course } from "../pages/courses";
import { Home } from "../pages/home";
import { Blog } from "../pages/blog";
import { About } from "../pages/about";
import { Login } from "../auth/login";
import { Signup } from "../auth/signup";
import { Contact } from "../pages/contact";
import { Alg1 } from "../pages/program/algebra1";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses/algebra1" element={<Alg1 />} />
    </Routes>
  );
};
