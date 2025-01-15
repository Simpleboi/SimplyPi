import React from "react";
import "../styles/courses.scss";





interface CourseProps {
  title?: string;
  modDate?: string;
  downloadLink?: string;
  imageUrl?: string;
  courseDesc?: string;
}

export const Course: React.FC<CourseProps> = ({
  title = "#",
  modDate = "#",
  downloadLink = "#",
  imageUrl = "#",
  courseDesc = "#",
}) => {
  return (
    <div className="course-card">
      <div className="card-top">
        <figure
          className="course-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></figure>
        <div className="course-content">
          <h3 className="course-title">
            {title}
            <a href="#">
              <i className="bx bx-chevron-right"></i>
            </a>
          </h3>
          <hr />
          <div className="card-details">
            <p className="course-author">Author: Nathaniel Paz</p>
            <p className="course-mod">Last Modified: {modDate}</p>
            <p className="course-desc">Description: {courseDesc}</p>
          </div>
        </div>
      </div>
      <a
        href={downloadLink}
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Course Materials
      </a>
    </div>
  );
};


export const Main = () => {
    return(
    <main className="course-main">
        <h1>Hello World</h1>
    </main>
)
}

