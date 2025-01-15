import { Course } from "../pages/courses";
import Alg1 from "/assets/images/alg1.jpg";
import Alg2 from "/assets/images/alg2.jpg";
import preCals from "/assets/images/pre_calc.jpg";
import calc1 from "/assets/images/calc1.jpg";
import calc2 from "/assets/images/calc2.jpg";
import calc3 from "/assets/images/calc3.jpg";
import diffEq from "/assets/images/diff_eq.jpg";
import geom from "/assets/images/geometry.jpg";
import graph from "/assets/images/GraphTheory.jpg";
import num from "/assets/images/NumberTheory.jpg";
import discrete from "/assets/images/discrete.jpg";
import linAlg from "/assets/images/linear_alg.jpg";
import abstract from "/assets/images/abstractAlg.jpg";


export const MathCourses = () => {
  return (
    <section className="course-main">
      <Course
        title="Algebra 1"
        modDate="01/15/2024"
        imageUrl={Alg1}
        courseDesc="Algebra 1 is the branch of mathematics that deals with understanding and using symbols and letters to represent numbers and quantities in equations and formulas. It focuses on topics like solving equations, graphing functions, and exploring relationships between variables, helping you build problem-solving skills and logical thinking"
      />
      <Course 
        title="Algebra 2"
        modDate="01/15/2024"
        imageUrl={Alg2}
        courseDesc="Algebra 2 builds on the concepts learned in Algebra 1, diving deeper into advanced topics like quadratic equations, polynomials, exponential and logarithmic functions, and systems of equations. It also introduces complex numbers and explores real-world applications, strengthening your problem-solving and analytical skills"
      />
      <Course 
        title="Geometry"
        modDate="01/15/2024"
        imageUrl={geom}
        courseDesc="Geometry is the branch of mathematics that studies shapes, sizes, and the properties of space. It focuses on points, lines, angles, surfaces, and solids, exploring concepts like congruence, similarity, area, and volume. Geometry helps develop spatial reasoning and logical thinking skills"
      />
      <Course 
        title="Trigonometry"
        modDate="01/15/2024"
        imageUrl={geom}
        courseDesc="Trigonometry is the branch of mathematics that studies the relationships between the angles and sides of triangles. It introduces functions like sine, cosine, and tangent, and explores concepts like angles, radians, and the unit circle. Trigonometry has practical applications in fields like engineering, physics, and astronomy"
      />
      <Course 
        title="Pre-Calculus"
        modDate="01/15/2024"
        imageUrl={preCals}
        courseDesc="Pre-Calculus bridges the gap between Algebra and Calculus, focusing on advanced mathematical concepts like trigonometry, complex numbers, vectors, and polynomial functions. It prepares you for the study of limits, derivatives, and integrals, providing the tools needed to tackle Calculus with confidence"
      />
      <Course 
        title="Calculus 1"
        modDate="01/15/2024"
        imageUrl={calc1}
        courseDesc="Calculus 1 is the study of limits, derivatives, and integrals, providing the foundation for understanding change and motion. It focuses on concepts like differentiation, integration, and their applications in real-world problems such as rates of change, optimization, and area under curves"
      />
      <Course 
        title="Calculus 2"
        modDate="01/15/2024"
        imageUrl={calc2}
        courseDesc="Calculus 2 expands on the fundamentals of integration and differentiation introduced in Calculus 1. It explores advanced integration techniques, sequences and series, parametric equations, polar coordinates, and applications such as finding volumes, arc lengths, and work"
      />
      <Course 
        title="Calculus 3"
        modDate="01/15/2024"
        imageUrl={calc3}
        courseDesc="Calculus 3 takes mathematics into three dimensions, focusing on multivariable calculus. It covers topics like partial derivatives, multiple integrals, vector calculus, and the geometry of curves and surfaces. This course is essential for understanding complex systems and applications in physics, engineering, and beyond"
      />
      <Course 
        title="Differential Equations"
        modDate="01/15/2024"
        imageUrl={diffEq}
        courseDesc="Differential Equations focuses on understanding and solving equations that describe how quantities change over time or space. Topics include first-order and higher-order equations, systems of differential equations, and real-world applications in fields like physics, biology, and engineering"
      />
      <Course 
        title="Graph Theory"
        modDate="01/15/2024"
        imageUrl={graph}
        courseDesc="Graph Theory is the study of graphs, which are mathematical structures used to model relationships between objects. It explores concepts like vertices, edges, paths, cycles, and connectivity, with applications in computer science, network analysis, logistics, and social networks"
      />
      <Course 
        title="Number Theory"
        modDate="01/15/2024"
        imageUrl={num}
        courseDesc="Number Theory is the study of integers and their properties. It explores concepts like divisibility, prime numbers, modular arithmetic, and the solutions to equations involving whole numbers. Known as the 'queen of mathematics,' it has applications in cryptography, coding theory, and computer science"
      />
      <Course 
        title="Discrete Math"
        modDate="01/15/2024"
        imageUrl={discrete}
        courseDesc="Discrete Mathematics focuses on the study of mathematical structures that are countable or distinct, such as integers, graphs, and logic. Key topics include set theory, combinatorics, algorithms, graph theory, and boolean algebra. It forms the foundation of computer science, enabling problem-solving in areas like cryptography, data structures, and network design"
      />
      <Course 
        title="Linear Algebra"
        modDate="01/15/2024"
        imageUrl={linAlg}
        courseDesc="Linear Algebra is the study of vectors, matrices, and linear transformations. It explores concepts like vector spaces, systems of linear equations, determinants, eigenvalues, and eigenvectors. This subject is essential in fields like computer graphics, machine learning, physics, and engineering"
      />
      <Course 
        title="Abstract Algebra"
        modDate="01/15/2024"
        imageUrl={abstract}
        courseDesc="Abstract Algebra explores advanced mathematical structures such as groups, rings, and fields. It focuses on understanding how these structures work and interact, providing the foundation for modern algebraic theories and applications in cryptography, coding theory, and theoretical physics"
      />
    </section>
  );
};
