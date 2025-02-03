import "../../../styles/courses/algebra1.scss";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export const MathExample = () => {
  return (
    <MathJaxContext>
      <h2>Math Example</h2>
      <p>
        The integral of <MathJax inline>{"\\(x^2\\)"}</MathJax> is:
      </p>
      <p>
        <MathJax>{"\\[ \\int x^3 \\,dx = \\frac{x^3}{3} + C \\]"}</MathJax>
      </p>
    </MathJaxContext>
  );
};

export const WhatIsAlgebra1 = () => {
  return (
    <div>
      <p>
        Algebra is like a <b>number puzzle</b> that helps us solve problems
        where we don't know all the numbers yet. Instead of only using regular
        numbers like 2, 3, or 10, algebra introduces letters like{" "}
        <MathJax inline> </MathJax>
        <MathJax inline>{"\\( x \\)"}</MathJax> and{" "}
        <MathJax inline>{"\\( y \\)"}</MathJax> to stand for missing numbers.
        These letters are called{" "}
        <i>
          <a
            href="https://en.wikipedia.org/wiki/Variable_(mathematics)"
            target="_blank"
          >
            variables
          </a>
        </i>
        , and they help us figure out unknown values in a logical way.
        <br />
        <br />
        Imagine you have a box, and inside the box is a secret number. If I tell
        you that adding 3 to the number inside the box gives you 7,{" "}
        <b>your job is to figure out what's inside the box</b>. You'd probably
        think, "hmm... what number plus 3 equals 7?" You might guess 4, and
        you'd be right because 4 + 3 = 7. In algebra, we write this as:
        <MathJax>{"\\[x + 3 = 7\\]"}</MathJax>
        Here, <MathJax inline>{"\\(x\\)"}</MathJax> is the secret number inside
        the box, and when we solve for <MathJax inline>{"\\(x\\)"}</MathJax>, we
        find out that <MathJax inline>{"\\(x = 4\\)"}</MathJax>. This is what
        algebra is all about, finding missing values using numbers, letters, and
        some simple rules. But algerba is more than just solving for missing
        numbers. It's a way of thinking that helps us make sense of patterns,
        relationships, and rules in math. It allows us to describe real-world
        situations in a way that can be calculated and predicted.
      </p>
      <h3>Where Did Algebra Come From?</h3>
      <p>
        Algebra is really, really old, people have been using it for thousands
        of years! The earliest known use of algebra was by the Babylonians
        around 4,000 years ago. They didn't write algebra the way we do today,
        but they used clever methods to solve problems about land, trade, and
        money. If they wanted to divide land fairly or calculate taxes, they
        used simple equations to figure it out.
        <br />
        <br />
        The Ancient Greeks also played a big role in developing algebra. A Greek
        mathematician named{" "}
        <a
          href="https://mathshistory.st-andrews.ac.uk/Biographies/Diophantus/"
          target="_blank"
        >
          Diophantus
        </a>{" "}
        (who lived around 1,800 years ago) wrote books about solving equations,
        and he introduced some of the early ways to write algebraic expressions.
        But back then, they didn't have the symbols we use today, everything was
        written out in words, making math problems super long!
        <br />
        <br />
        Then, about 1,200 years ago, a mathematician named{" "}
        <a
          href="https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/"
          target="_blank"
        >
          Al-Khwarizmi
        </a>{" "}
        from the Middle East changed everything. He wrote a book that organized
        algebra into simple steps, showing people how to solve problems more
        easily. The word "algebra" actually comes from the Arabic word
        "al-jabr," which means "restoration" or "completion." He introduced many
        of the techniques we still use today, like solving for x and working
        with equations in a clear and structured way.
        <br />
        <br />
        As time went on, European mathematicians built on these ideas. During the Renasissance, math geniuses like François Viète and René Descartes helped make algebra look more like what we see in textbooks today. They introduced symbols like <MathJax inline>{"\\(x, y\\)"}</MathJax> and =, which made equations much easier to write and understand.
      </p>
    </div>
  );
};

export const IntroToAlg1 = () => {
  return (
    <MathJaxContext>
      <section className="intro-to-alg1">
        <hr />
        <h2>Introduction to Algebra 1</h2>
        <WhatIsAlgebra1 />
      </section>
    </MathJaxContext>
  );
};
