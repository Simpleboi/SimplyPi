import "../styles/nav.scss";

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

export const Nav = () => {
  return (
    <nav className="nav">
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
      <div className="nav-wrapper-right">
        <div>
          <button>Sign Up</button>
        </div>
        <div>
          <i className="bx bx-log-in"></i>
          <button>Log In</button>
        </div>
      </div>
    </nav>
  );
};
