import "../styles/nav.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";

// Mobile Nav Links
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

// Desktop Navigation Links
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
          <button>
            <i className="bx bx-menu"></i>
          </button>
        </div>
      ) : (
        <NavLinks />
      )}

      <div className="nav-wrapper-right">
        {user ? (
          // Show user greeting & logout button when logged in
          <div className="user-info">
            <span>Hello, {user.displayName || "User"}!</span>
            <button onClick={handleLogout} className="log-out">
            Log Out
            <i className='bx bx-log-out-circle' ></i> 
            </button>
          </div>
        ) : (
          // Show Sign Up & Log In buttons when logged out
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};
