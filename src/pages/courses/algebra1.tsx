import "../../styles/courses/algebra1.scss";
// import { GraphingCalculator } from "../../ui/GraphingCalculator";

export const Alg1ContentOfTables = () => {
  return (
    <section className="alg1-toc">
      <h2>Table of Contents</h2>
      <details>
        <summary>📖Introduction to Algebra 1</summary>
        <a href="#">What is Algebra?</a>
        <br />
        <a href="#">Order of Operations (PEMDAS)</a>
        <br />
        <a href="#">Basic Properties of Algebra</a>
      </details>
      <details>
        <summary>🔢 Algebraic Expressions & Equations</summary>
        <a href="#">Simplying Expressions</a>
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
        <a href="#">Rules of Exponents</a>
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

export const Alg1Resources = () => {
  return (
    <div className="alg1-resources">
      <button>PDF Notes</button>
      <button>Practice Worksheets</button>
      <button>Extra Resources</button>
      <button>Q&A</button>
    </div>
  );
};



export const Alg1 = () => {
  return (
    <section className="algebra-1">
      <h1 className="alg1-header">Algebra 1</h1>
      <Alg1Resources />
      <hr />
      <p>Last Updated: 01/31/25</p>
      <Alg1ContentOfTables />
    </section>
  );
};
