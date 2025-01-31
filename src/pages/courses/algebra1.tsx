import "../../styles/courses/algebra1.scss";

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
        <a href="#">Writing & Interpreting Linear Equations from Word Problems</a>
        <br />
      </details>
      <details>
        <summary>📈 Systems of Equations & Inequalities
            <a href="#">Solving Systems of Equations by Graphing
            </a>
            <br />
            <a href="#">Solving Systems of Equations by Substitution
            </a>
            <br />
            <a href="#">Solving Systems of Equations by Elimination
            </a>
            <br />
            <a href="#">Graphing Linear Inequalities
            </a>
            <br />
            <a href="#">Solving Systems of Inequalities
            </a>
            <br />
        </summary>
      </details>
    </section>
  );
};

export const Alg1 = () => {
  return (
    <section className="algebra-1">
      <Alg1ContentOfTables />
    </section>
  );
};
