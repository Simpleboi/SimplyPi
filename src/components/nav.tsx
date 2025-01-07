import "../styles/nav.scss";
import { useState, useEffect } from "react";

export const MobileNav = () => {
  return (
    <div>
      <div className="mobile-links">
        <a href="#">Courses</a>
        <a href="#">Resources</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
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
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
          <button className="sign-up">
            <i className="bx bx-user"></i>Sign Up
          </button>
        </div>
        <div>
          <button className="log-in">
            <i className="bx bx-log-in"></i>Log In
          </button>
        </div>
      </div>
    </nav>
  );
};
