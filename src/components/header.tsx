import "../styles/header.scss";

export const Header = () => {
  return (
    <header>
      <div className="info">
        <h1>SimplyPi</h1>
        <p>
          Making Math & Computer Science as <span>Simple</span> as{" "}
          <span>Pi</span>
        </p>
      </div>
      <div className="buttons">
        <button className="see-courses">See More</button>
        <button className="help">Help?</button>
      </div>
      <div className="search-bar-header">
        <input type="text" placeholder="Search What you want..." />
        <button>
          <i className="bx bx-search"></i>
        </button>
      </div>
    </header>
  );
};
