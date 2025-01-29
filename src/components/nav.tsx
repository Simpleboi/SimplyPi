import "../styles/nav.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  return (
    <div>
      <div className="mobile-links">
        <Link to="/course">Courses</Link>
        <a href="#">Resources</a>
        <a href="#">About</a>
        <Link to="/blog">Courses</Link>
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
};

export const NavLinks = () => {
  return (
    <div className="nav-wrapper-left">
      <figure>
        <h1>SP</h1>
      </figure>
      <ul>
        <li>
          <Link to="/course">Courses</Link>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Monitor the window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      {isMobile ? (
        <div className="nav-wrapper-left">
          <button>
            <i className="bx bx-menu"></i>
          </button>
        </div>
      ) : (
        <NavLinks />
      )}
      <div className="nav-wrapper-right">
        <div>
          <Link to="/signup" className="sign-up">
            <i className="bx bx-user"></i>Sign Up
          </Link>
        </div>
        <div>
          <Link to="/login" className="log-in"><i className="bx bx-log-in"></i>Log In</Link>
        </div>
      </div>
    </nav>
  );
};
