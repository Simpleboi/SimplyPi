import "../../../styles/courses/algebra1.scss";
import { MathJaxContext, MathJax } from "better-react-mathjax";

export const RulesOfExponents = () => {
  return (
    <div>
      <p>
        Exponents and Radicals are topics about how numbers grow and shrink in
        powerful ways!
        <br />
        <br />
        An <b>exponent</b> is a way to write repeated multiplciation in a short form. Instead of writing <MathJax inline>{"\\(5\\times5\\times5\\)"}</MathJax>, we can use an exponent to make it simpler:
        <MathJax>{"\\[5^3\\]"}</MathJax>
        Here, 5 is the <b>base</b> (the number being multiplied), and 4 is the <b>exponent</b> (telling us how many times to multiply it). 
        <br />This means:
        <MathJax>{"\\[5^3=5\\times5\\times5\\]"}</MathJax> 
        <MathJax>{"\\[=625\\]"}</MathJax>
        Exponents make it way easier to work with large numbers and help in everything from algebra to physics and engineering. 
        <br />
        <br />
        We also cover <a href="#">Exponent Rules</a> (How to simplify and work with them) and <a href="#">Negative & Fractional Exponents</a> (What happens when exponents aren't whole numbers). Click on the topic you wish to explore futher. 
      </p>
      <h3>What are Radicals?</h3>
      <p>
        A <b>radical</b> is the opposite of an exponent. While an exponent multiplies a number repeatedly, a radical undoes that multiplication. 
        <br />
        <br />
        The most common way
      </p>
    </div>
  );
};

export const ExponentsAndRadicals = () => {
  return (
    <MathJaxContext>
      <section className="intro-to-alg1" id="exponents">
        <hr />
        <h2>Exponents & Radicals</h2>
        <RulesOfExponents />
      </section>
    </MathJaxContext>
  );
};
