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
        An <b>exponent</b> is a way to write repeated multiplciation in a short
        form. Instead of writing{" "}
        <MathJax inline>{"\\(5\\times5\\times5\\)"}</MathJax>, we can use an
        exponent to make it simpler:
        <MathJax>{"\\[5^3\\]"}</MathJax>
        Here, 5 is the <b>base</b> (the number being multiplied), and 4 is the{" "}
        <b>exponent</b> (telling us how many times to multiply it).
        <br />
        This means:
        <MathJax>{"\\[5^3=5\\times5\\times5\\]"}</MathJax>
        <MathJax>{"\\[=625\\]"}</MathJax>
        Exponents make it way easier to work with large numbers and help in
        everything from algebra to physics and engineering.
        <br />
        <br />
        We also cover <a href="#">Exponent Rules</a> (How to simplify and work
        with them) and <a href="#">Negative & Fractional Exponents</a> (What
        happens when exponents aren't whole numbers). Click on the topic you
        wish to explore futher.
      </p>
      <h3>What are Radicals?</h3>
      <p>
        A <b>radical</b> is the opposite of an exponent. While an exponent
        multiplies a number repeatedly, a radical undoes that multiplication.
        <br />
        <br />
        The most common radical you'll see is the square root (
        <MathJax inline>{"\\(\\sqrt{x}\\)"}</MathJax>), which tells us{" "}
        <b>what number multiplies by itself to get the given number</b>.
        <br />
        For example:
        <MathJax>{"\\[\\sqrt{25}=5\\]"}</MathJax>
        (Because 5 times 5 is 25.)
        <br />
        <br />
        Just like with exponents, we have rules for working with radicals,
        including: <a href="#">Simplifying Radicals</a>(Making them easier to
        work with), <a href="#">Multiplyinng & Dividing Radicals</a>, and{" "}
        <a href="#">How Radicals and Exponetns are Connected</a>. Click on the
        topic you wish to explore further.
      </p>
      <br />
      <hr />
      <h2>Rules of Exponents</h2>
      <p>
        Exponents are a <b>shortcut for repeated multiplciation</b>. Instead of
        writing <MathJax inline>{"\\(3\\times3\\times3\\times3\\)"}</MathJax>,
        we write <MathJax inline>{"\\(3^4\\)"}</MathJax>, which means "multiply
        3 by itself four times".
        <br />
        <br />
        But when we multiply or divide, or raise exponents to powers, there are
        special rules to follow. These rules help us{" "}
        <b>simplify expressions quickly without writing long multiplciations</b>
        . Let's go over them!
      </p>
      <h3>The Product Rule (Multiplyinng Same Base)</h3>
      <p>
        When you multiply <b>two numbers with the same base</b>, add the
        exponents.
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
        <b>Why do we do this?</b> <br />
        Let's think about it for a second. Let's say we have:{" "}
        <MathJax inline>{"\\(2^3\\times2^4\\)"}</MathJax> for example. If we
        write this out:
        <MathJax>
          {"\\[(2\\times2\\times2)\\times(2\\times2\\times2\\times2)\\]"}
        </MathJax>
        Since we are multiplying seven total 2's, we can just add the exponents
        instead of writing them all out!
        <MathJax>
          {"\\[(2\\times2\\times2)\\times(2\\times2\\times2\\times2)\\]"}
        </MathJax>
        <MathJax>
          {"\\[=2\\times2\\times2\\times2\\times2\\times2\\times2\\]"}
        </MathJax>
        <MathJax>{"\\[=2^7\\]"}</MathJax>
        And this is why we use this rule!
      </p>
      <h3>The Quotient Rule (Dividing Same Base)</h3>
      <p>
        When dividing numbers with <b>the same base</b>, you subtract the
        exponents.
        <MathJax>{"\\[a^m\\div a^n=a^{m-n}\\]"}</MathJax>
        Example 1:
        <MathJax>{"\\[5^6\\div 5^2\\]"}</MathJax>
        Since the base is the same (5), subtract the exponents:
        <MathJax>{"\\[5^{6-2}\\]"}</MathJax>
        <MathJax>{"\\[=5^{4}\\]"}</MathJax>
        <MathJax>{"\\[=625\\]"}</MathJax>
        Example 2:
        <MathJax>{"\\[x^8\\div x^3\\]"}</MathJax>
        They have the same base (x), so subtract:
        <MathJax>{"\\[x^{8-3}\\]"}</MathJax>
        <MathJax>{"\\[=x^5\\]"}</MathJax>
        <h4>But why do we do subtract the exponents?</h4>
        <br />
        Let's think about this visually with an example:
        <MathJax>{"\\[5^6 \\div 5^2\\]"}</MathJax>
        We know that exponents are just <b>repeated multiplciation</b>, so we
        can rewrite <MathJax inline>{"\\(5^6\\)"}</MathJax> as:
        <MathJax>
          {"\\[5^6=5\\times5\\times\\times5\\times5\\times5\\times5\\]"}
        </MathJax>
        Now, let's divide this by <MathJax inline>{"\\(5^2\\)"}</MathJax>
        <MathJax>{"\\[\\frac{5^6}{5^2}\\]"}</MathJax>
        <MathJax>
          {
            "\\[=\\frac{5\\times5\\times5\\times5\\times5\\times5}{5\\times5}\\]"
          }
        </MathJax>
        Before simplifying, let's ask an important question:{" "}
        <b>
          <i>What happens when a number is divided by itself?</i>
        </b>
        <br />
        For example, if we divide <MathJax inline>{"\\(5\\div 5\\)"}</MathJax>.
        , or
        <MathJax>{"\\[\\frac{5}{5}\\]"}</MathJax>
        <MathJax>{"\\[=1\\]"}</MathJax>
        This means that each <MathJax inline>{"\\(5\\)"}</MathJax> in the
        numerator (top) cancels out with a <MathJax inline>{"\\(5\\)"}</MathJax>{" "}
        in the denominator (bottom), because any number divded by itself equals
        1.
        <br />
        <br />
        Now, lets' cancel out the two <MathJax inline>{"\\(5\\)"}</MathJax>'s in
        the denominator with the two <MathJax inline>{"\\(5\\)"}</MathJax>'s in
        the numerator:
        <MathJax>
          {"\\[\\frac{5\\times5\\times5\\times5\\times5\\times5}{5\\times5}\\]"}
        </MathJax>
        <MathJax>{"\\[=\\frac{5\\times5\\times5\\times5}1\\]"}</MathJax>
        <MathJax>{"\\[=5\\times5\\times5\\times5\\]"}</MathJax>
        <MathJax>{"\\[=5^4\\]"}</MathJax>
        So, we can see that:
        <MathJax>{"\\[5^6 \\div 5^2\\]"}</MathJax>
        <MathJax>{"\\[=5^{6-2}\\]"}</MathJax>
        <MathJax>{"\\[=5^{4}\\]"}</MathJax>
        This is why we subtract the exponents when dividing powers with the same
        base! instead of writing out all the multiplciation, we use the
        shortcut:
        <MathJax>{"\\[a^m \\div a^n = a^{m-n}\\]"}</MathJax>
        This rule makes calculations with exponents a lot easer, espeically in
        harder math.
      </p>
      <h3>The Power Rule (Power to a Power)</h3>
      <p>
        When raising an exponent to another exponent, multiply the exponents.
        <MathJax>{"\\[(a^m)^n=a^{m\\times n}\\]"}</MathJax>
        Example 1:
        <MathJax>{"\\[(3^2)^4\\]"}</MathJax>
        Multiply the exponents:
        <MathJax>{"\\[3^{2\\times4}\\]"}</MathJax>
        <MathJax>{"\\[=3^8\\]"}</MathJax>
        <MathJax>{"\\[=6,561\\]"}</MathJax>
        Example 2:
        <MathJax>{"\\[(x^3)^5\\]"}</MathJax>
        Multiply the exponents:
        <MathJax>{"\\[x^{3\\times5}\\]"}</MathJax>
        <MathJax>{"\\[=x^{15}\\]"}</MathJax>
        <h4>Why do we multiply the exponents?</h4>
        <br />
        When we see:
        <MathJax>{"\\[(2^2)^4\\]"}</MathJax>
        This really says:
        <MathJax>
          {
            "\\[(2\\times2)\\times(2\\times2)\\times(2\\times2)\\times(2\\times2)\\]"
          }
        </MathJax>
        We multiplied two 2's four times, so we just multiply{" "}
        <MathJax inline>{"\\(2\\times4=8\\)"}</MathJax> instead!
      </p>
      <h3>The Zero Exponent Rule</h3>
      <p>
        Any number (except 0) raised to the power of 1.{" "}
        <MathJax>{"\\[a^0=1\\]"}</MathJax>
        Where{" "}
        <MathJax inline>{"\\(a\\)"}</MathJax>
          {" "}is not<MathJax inline>{"\\(0\\)"}</MathJax>{" "}
          Example 1:
          <MathJax>{"\\[5^0=1\\]"}</MathJax>
          Example 2:
          <MathJax>{"\\[1000^0=1\\]"}</MathJax>
          Example 3:
          <MathJax>{"\\[x^0=1\\]"}</MathJax>
          <h4>But why does the power of 0 equal 1?</h4>
          <br />
          This actually comes from the quotient rule:
          <MathJax>{"\\[a^m\\div a^m=a^{m-m}=a^0\\]"}</MathJax>
          Since any number divided by itself is 1, we get:
          <MathJax>{"\\[a^0=1\\]"}</MathJax>
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
