import React from "react";
import "../styles/courses.scss";
import { Nav } from "../components/nav";
import { MathCourses } from "../components/mathCourses";

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
            <p className="coure-rating">
              Rating: <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </p>
          </div>
        </div>
      </div>
      <p className="course-desc">{courseDesc}</p>
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

export const CourseMain = () => {
  return (
    <>
      <Nav/>
      <main className="course-main">
        <MathCourses />
      </main>
    </>
  );
};
