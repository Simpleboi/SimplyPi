import "../../../styles/courses/algebra1.scss";
import { CourseHeader } from "../../../ui/CourseHeader";
import { IntroToAlg1 } from "./introToalg1";
import { ExpressAndEq } from "./expressAndEq";
import { ExponentsAndRadicals } from "./exponAndRadicals";

export const Alg1ContentOfTables = () => {
  return (
    <section className="alg1-toc">
      <h2 id="tocalg1">Table of Contents</h2>
      <details>
        <summary>📖Introduction to Algebra 1</summary>
        <a href="#whatIsAlgebra1">What is Algebra?</a>
        <br />
        <a href="#orderOfOperations">Order of Operations (PEMDAS)</a>
        <br />
        <a href="#propsOfAlg1">Basic Properties of Algebra</a>
      </details>
      <details>
        <summary>🔢 Algebraic Expressions & Equations</summary>
        <a href="#simple-express">Simplying Expressions</a>
        <br />
        <a href="#">Solving One-step Equations</a>
        <br />
        <a href="#">Solving Multi-Step Equations</a>
        <br />
        <a href="#">Solving Equations with Variables on Both Sides</a>
        <br />
        <a href="#">Understanding & Applying Ratios and Proportions</a>
        <br />
        <a href="#">Working with Absolute Value Equations</a>
        <br />
      </details>
      <details>
        <summary>📊 Linear Functions & Graphing</summary>
        <a href="#">Understanding the Cartesian Plane</a>
        <br />
        <a href="#">Graphing Linear Equations</a>
        <br />
        <a href="#">Slope-Intercept Form (y = mx + b)</a>
        <br />
        <a href="#">Point-Slope Form & Standard Form</a>
        <br />
        <a href="#">Parallel and Perpendicular Lines</a>
        <br />
        <a href="#">
          Writing & Interpreting Linear Equations from Word Problems
        </a>
        <br />
      </details>
      <details>
        <summary>📈 Systems of Equations & Inequalities</summary>
        <a href="#">Solving Systems of Equations by Graphing</a>
        <br />
        <a href="#">Solving Systems of Equations by Substitution</a>
        <br />
        <a href="#">Solving Systems of Equations by Elimination</a>
        <br />
        <a href="#">Graphing Linear Inequalities</a>
        <br />
        <a href="#">Solving Systems of Inequalities</a>
        <br />
      </details>
      <details>
        <summary>➗ Polynolymials & Factoring</summary>
        <a href="#">Introduction to Polynomials</a>
        <br />
        <a href="#">Adding & Subtracting Polynomials</a>
        <br />
        <a href="#">Multiplying Polynomials</a>
        <br />
        <a href="#">Factoring Polynomials</a>
        <br />
        <a href="#">
          Factoring Completely & Solving Quadratic Equations by Factoring
        </a>
        <br />
      </details>
      <details>
        <summary>📐 Quadratic Functions & Equations</summary>
        <a href="#">Understanding Quadratic Functions</a>
        <br />
        <a href="#">Graphing Quadratic Equations</a>
        <br />
        <a href="#">Solving Quadratic Equations by Square Roots</a>
        <br />
        <a href="#">Solving Quadratic Equations by Completing the Square</a>
        <br />
        <a href="#">The Quadratic Formula</a>
        <br />
        <a href="#">Applications of Quadratic Equations</a>
        <br />
      </details>
      <details>
        <summary>📊 Exponents & Radicals</summary>
        <a href="#exponents">Rules of Exponents</a>
        <br />
        <a href="#">Negative & Zero Exponents</a>
        <br />
        <a href="#">Scientific Notation & Applications</a>
        <br />
        <a href="#">Simplifying Square Roots & Radical Expressions</a>
        <br />
        <a href="#">Operations with Radicals</a>
        <br />
      </details>
      <details>
        <summary>📉 Functions & Relations</summary>
        <a href="#">Understanding Relations & Functions</a>
        <br />
        <a href="#">Identifying Functions from Graphs & Tables</a>
        <br />
        <a href="#">Function Transformations</a>
        <br />
      </details>
      <details>
        <summary>🎲 Probability & Statistics</summary>
        <a href="#">Basic Probability Rules</a>
        <br />
        <a href="#">Measures of Central Tendency</a>
        <br />
        <a href="#">Interpreting Graphs & Data Sets</a>
        <br />
      </details>
      <details>
        <summary>🎯 Final Review & Practice</summary>
        <a href="#">Comprehensive Algebra 1 Review</a>
        <br />
        <a href="#">Practice Tests & Sample Problems</a>
        <br />
        <a href="#">Real-World Applications of Algebra</a>
        <br />
      </details>
    </section>
  );
};

export const BackToTop = () => {
  return (
    <div className="Back-to-top">
      <a href="#tocalg1">
        Back to Top <i className="bx bx-up-arrow-alt"></i>
      </a>
    </div>
  );
};

export const Alg1Resources = () => {
  const alg1pdfUrl =
    "https://hillcrestmath.wordpress.com/wp-content/uploads/2010/08/8th-grade-algebra-i-textbook.pdf";

  return (
    <div className="alg1-resources">
      <a href={alg1pdfUrl} target="_blank" download="Algebgra1">
        PDF Notes
      </a>
      <a>Practice Worksheets</a>
      <a>Extra Resources</a>
      <a>Q&A</a>
      <a>Graphing Calculator</a>
    </div>
  );
};

export const Alg1 = () => {
  return (
    <section className="algebra-1">
      <BackToTop />
      <CourseHeader title="Algebra 1"></CourseHeader>
      <Alg1Resources />
      <hr />
      <p>Last Updated: 02/03/25</p>
      <Alg1ContentOfTables />
      <p>
        This course is designed to be flexible, allowing you to explore topics
        at your own pace rather than following a strict, linear progression. You
        don't have to start at the beginning and work your way to the end,
        instead, you can jump to any section that aligns with what you need to
        learn at the moment. Whether you're reviewing concepts, filling in
        knowledge gaps, or tackling new material, this course serves as a
        self-study resource rather than a step-by-step guided curriculum. The
        goal is to give you the freedom to learn in a way that best suits your
        individual needs.
      </p>
      <br />
      <IntroToAlg1 />
      <ExpressAndEq />
      <ExponentsAndRadicals />
    </section>
  );
};
