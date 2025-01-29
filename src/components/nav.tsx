import "../styles/nav.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";

// Nav Log in Buttons
export const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <div>
        <Link to="/signup" className="sign-up">
          <i className="bx bx-user"></i> Sign Up
        </Link>
      </div>
      <div>
        <Link to="/login" className="log-in">
          <i className="bx bx-log-in"></i> Log In
        </Link>
      </div>
    </div>
  );
};

// Mobile Nav Links
export const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="mobile-btn" onClick={toggleMenu}>
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home <i className="bx bx-home"></i>
            </Link>
          </li>
          <li>
            <Link to="/course" onClick={() => setIsMenuOpen(false)}>
              Courses <i className="bx bxs-school"></i>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About <i className="bx bx-info-square"></i>
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog <i className="bx bx-book-reader"></i>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact <i className="bx bxs-contact"></i>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Log In <i className="bx bx-log-in"></i>
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              Sign Up <i className="bx bx-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

// Desktop Navigation Links
export const NavLinks = () => {
  return (
    <div className="nav-wrapper-left">
      <figure>
        <Link to="/" className="logo">
          SP
        </Link>
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

// Main Navbar Component
export const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  // Detect window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect Authentication State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="nav">
      {isMobile ? (
        <div className="nav-wrapper-left">
          <MobileNav />
        </div>
      ) : (
        <NavLinks />
      )}

      <div className="nav-wrapper-right">
        {user ? (
          <div className="user-info">
            <span>Hello, {user.displayName || "User"}!</span>
            <button onClick={handleLogout} className="log-out">
              Log Out
              <i className="bx bx-log-out-circle"></i>
            </button>
          </div>
        ) : (
          <NavButtons />
        )}
      </div>
    </nav>
  );
};
