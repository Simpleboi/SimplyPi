import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Home } from "./pages/home";
import { CourseMain } from "./pages/courses";
import { Blog } from "./pages/blog";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Nav } from "./components/nav";
import { Login } from "./auth/login";
import { Signup } from "./auth/signup";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CourseMain />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
