import "../../../styles/courses/algebra1.scss";
import { MathJaxContext, MathJax } from "better-react-mathjax";

export const SimplyfyingExpres = () => {
  return (
    <div id="simple-express">
      <p>
        Algebra can sometimes look complicated, especially when you see a bunch
        of numbers, variables, and operations all mixed togehter. But don't
        worry, <b>simplfying expressions</b> is just a way to make things look
        cleaner and easier to work with. Think of it like tidying up your room,
        you're not changing what's in it, just organzizing things so they make
        more sense!
      </p>
      <h3>What is an Expression?</h3>
      <p>
        An <b>expression</b> is a combination of numbers, variables, and
        operations (like addition, subtraction, multiplication, and division),
        but without an equal sign. Since it doesn't have an equal sign, it's not
        something you can solve, you can only simplify it.
        <br /> For example:
        <MathJax>{"\\[3x+5-2x\\]"}</MathJax>
        This is an expression because there's no equal (=) sign. Think of an
        expression like a math phrase. You can rewrite it to look simpler, but
        it doesn't have an answer like an equation does.
      </p>
      <h3>How to Simplify Expressions</h3>
      <p>
        Simplifying means combining like terms and using basic algebra rules to
        clean up the expression. Let's work through this step-by-step.
      </p>
      <h3>Step 1: Identify Like Terms</h3>
      <p>
        <b>Like terms</b> are terms that have the same variable raised to the
        same power. They can be added or subtracted together.
        <br />
        For example:
        <br />
        <br />
        <MathJax inline>{"\\(2x\\)"}</MathJax> and{" "}
        <MathJax inline>{"\\(5x\\)"}</MathJax> are like terms, they both have an{" "}
        <MathJax inline>{"\\(x\\)"}</MathJax>
        <br />
        <MathJax inline>{"\\(3y^2\\)"}</MathJax> and
        <MathJax inline>{"\\(7y^2\\)"}</MathJax> are like terms (both have{" "}
        <MathJax inline>{"\\(y^2\\)"}</MathJax>)
        <br />
        4 and -2 are like terms, both are just numbers with no variables.
        <br />
        <br />
        However:
        <br />
        <MathJax inline>{"\\(2x\\)"}</MathJax> and{" "}
        <MathJax inline>{"\\(3y\\)"}</MathJax> are <b>not</b> like terms because
        they have different variables.
        <br />
        <MathJax inline>{"\\(5x\\)"}</MathJax> and{" "}
        <MathJax inline>{"\\(4x^2\\)"}</MathJax> are <b>not</b> like terms
        because they have different powers of{" "}
        <MathJax inline>{"\\(x\\)"}</MathJax>.
      </p>
      <h3>Step 2: Combine Like Terms</h3>
      <p>
        Once we've found the like terms, we add or subtract them to simplify the
        expression.
        <br />
        Example 1:
        <MathJax>{"\\[3x+5-2x\\]"}</MathJax>
        Here, <MathJax inline>{"\\(3x\\)"}</MathJax> and{" "}
        <MathJax inline>{"\\(-2x\\)"}</MathJax> are like terms, so we combine
        them together:
        <MathJax>{"\\[(3x-2x)+5\\]"}</MathJax>
        This can also be written as:
        <MathJax>{"\\[(3-2)x+5\\]"}</MathJax>
        Which equals:
        <MathJax>{"\\[x+5\\]"}</MathJax>
        And this is as simple it can get, or in algebra we'd say this expression
        is simplified.
      </p>
      <h3>Use the Distributive Property if Needed</h3>
      <p>
        Sometimes expressions have parentheses, and we need to distribute a number before combining like terms.
      </p>
    </div>
  );
};

export const ExpressAndEq = () => {
  return (
    <MathJaxContext>
      <section className="intro-to-alg1">
        <hr />
        <h2>Algebraic Expressions & Equations</h2>
        <SimplyfyingExpres />
      </section>
    </MathJaxContext>
  );
};
