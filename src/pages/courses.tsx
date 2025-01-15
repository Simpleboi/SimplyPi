import React from "react";
import "../styles/courses.scss";
import Alg1 from "/assets/images/alg1.jpg";

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

export const Main = () => {
  return (
    <main className="course-main">
      <Course imageUrl={Alg1} title="Algebra 1" 
      courseDesc="Algebra 1 focuses on the importance of student development or some shit like that in some type way yk?"/>
      <Course imageUrl={Alg1} title="Algebra 1" 
      courseDesc="Algebra 1 focuses on the importance of student development or some shit like that in some type way yk?"/>
      <Course imageUrl={Alg1} title="Algebra 1" 
      courseDesc="Algebra 1 focuses on the importance of student development or some shit like that in some type way yk?"/>
      <Course imageUrl={Alg1} title="Algebra 1" 
      courseDesc="Algebra 1 focuses on the importance of student development or some shit like that in some type way yk?"/>
      <Course imageUrl={Alg1} title="Algebra 1" 
      courseDesc="Algebra 1 focuses on the importance of student development or some shit like that in some type way yk? Algebra 1 focuses on the importance of student development or some shit like that in some type way yk?"/>
    </main>
  );
};
