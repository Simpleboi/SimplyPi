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
        The most common radical you'll see is the square root (<MathJax inline>{"\\(\\sqrt{x}\\)"}</MathJax>), which tells us <b>what number multiplies by itself to get the given number</b>.
        <br />For example:
        <MathJax>{"\\[\\sqrt{25}=5\\]"}</MathJax>
        (Because 5 times 5 is 25.)
        <br />
        <br />
        Just like with exponents, we have rules for working with radicals, including: <a href="#">Simplifying Radicals</a>(Making them easier to work with), <a href="#">Multiplyinng & Dividing Radicals</a>, and <a href="#">How Radicals and Exponetns are Connected</a>. Click on the topic you wish to explore further. 
      </p>
      <br />
      <hr />
      <h2>Rules of Exponents</h2>
      <p>
        Exponents are a <b>shortcut for repeated multiplciation</b>. Instead of writing <MathJax inline>{"\\(3\\times3\\times3\\times3\\)"}</MathJax>, we write <MathJax inline>{"\\(3^4\\)"}</MathJax>, which means "multiply 3 by itself four times". 
        <br />
        <br />
        But when we multiply or divide, or raise exponents to powers, there are special rules to follow. These rules help us <b>simplify expressions quickly without writing long multiplciations</b>. Let's go over them!
      </p>
      <h3>The Product Rule</h3>
      <p>
        When you multiply <b>two numbers with the same base</b>, add the exponents. 
        <MathJax>{"\\[a^m\\times a^n=a^{m+n}\\]"}</MathJax>
        For example:
        <MathJax>{"\\[2^3\\times2^4\\]"}</MathJax>
        Since the base is the same (2), we add the exponents:
        <MathJax>{"\\[2^3\\times2^4\\]"}</MathJax>
        <MathJax>{"\\[=2^{3+4}\\]"}</MathJax>
        <MathJax>{"\\[=2^{7}\\]"}</MathJax>
        <MathJax>{"\\[=128\\]"}</MathJax>
        Here's another example:
        <MathJax>{"\\[x^5\\times x^2\\]"}</MathJax>
        Since they have the same base (x), we add the exponents:
        <MathJax>{"\\[x^5\\times x^2\\]"}</MathJax>
        <MathJax>{"\\[=x^{5+2}\\]"}</MathJax>
        <MathJax>{"\\[=x^{7}\\]"}</MathJax>
        <b>Why do we do this?</b> <br />Let's think about it for a second. Let's say we have: <MathJax inline>{"\\(2^3\\times2^4\\)"}</MathJax> for example. If we write this out:
        <MathJax>{"\\[(2\\times2\\times2)\\times(2\\times2\\times2\\times2)\\]"}</MathJax>
        Since we are multiplying seven total 2's, we can just add the exponents instead of writing them all out!
        <MathJax>{"\\[(2\\times2\\times2)\\times(2\\times2\\times2\\times2)\\]"}</MathJax>
        <MathJax>{"\\[=2\\times2\\times2\\times2\\times2\\times2\\times2\\]"}</MathJax>
        <MathJax>{"\\[=2^7\\]"}</MathJax>
        And this is why we use this rule!
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
