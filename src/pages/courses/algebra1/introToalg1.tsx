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
        As time went on, European mathematicians built on these ideas. During
        the Renasissance, math geniuses like François Viète and René Descartes
        helped make algebra look more like what we see in textbooks today. They
        introduced symbols like <MathJax inline>{"\\(x, y\\)"}</MathJax> and =,
        which made equations much easier to write and understand.
      </p>
      <h3>Why Do We Use Algebra?</h3>
      <p>
        Algebra isn't just something you learn in school, it's used everywhere
        in real life. Scientists use algebra to calculate things like speed,
        gravity, and chemical reactions. Engineers use it to design bridges,
        buildings, and machines. Computer programmers use algebra to make apps,
        video games, and websites work{" "}
        <i>
          ("I used algebra to build SimplyPi, the website you're reading this
          on" - Nate)
        </i>
        . Even businesses use algebra to figure out profits, costs, and prices.
        Think about when you go shopping. Let's say you have $20, and you want
        to buy some snacks. If each snack costs $3, you can use algebra to
        figure out how many snacks you can buy. The equation would look
        something like this:
        <MathJax>{"\\[3x=20\\]"}</MathJax>
        Here, <MathJax inline>{"\\(x\\)"}</MathJax> is the number of snacks you
        can buy. When we solve for <MathJax inline>{"\\(x\\)"}</MathJax>, we
        find that <MathJax inline>{"\\(x=6\\)"}</MathJax> with some money left
        over. That's algebra in action! Even if you don't realize it, you're
        already using algebra every day. Whenever you figure out how much time
        you need to get ready in the morning, split a bill with friends, or
        adjust a recipe when cooking, you're using algebraic thinking.
        <br />
        <br />
        At first, algebra might seem like a bunch of confusing letters and
        numbers, but once you start seeing how it works, it's like unlocking a
        secret code that makes math easier and more powerful. It helps us solve
        puzzles, find patterns, and understand how things work in the real
        world. So, don't worry if algebra feels tricky at first. Just remember,
        it's all about finding missing numbers and solving problems in a smart
        way. Once you get the hang of it, you'll start seeing it everywhere,
        from video games to science experiments to everyday life.
      </p>
      <br />
    </div>
  );
};

export const OrderOfOperations = () => {
  return (
    <div>
      <h2>Order of Operations</h2>
      <p>
        Math can be tricky when you see a big problem with a bunch of numbers,
        parentheses, and different symbols. If you don't follow the right steps,
        you might get the wrong answer! That's why we use something called{" "}
        <b>Order of Operations</b>, which is a set of rules that tells us what
        to solve first.
      </p>
      <br />
      You can remember the order with the word PEMDAS:
      <br />
      <ul>
        <p>P - Parentheses</p>
        <p>E - Exponents</p>
        <p>M - Multiplication</p>
        <p>D - Division</p>
        <p>A - Addition</p>
        <p>S - Subtraction</p>
      </ul>
      <p>
        Each letter tells us{" "}
        <i>which part of the math problem to solve first</i> so we don't get
        mixed up. Let's break each of these down step-by-step.
      </p>
      <h3>Step 1: Parentheses (P)</h3>
      <p>
        If there are parentheses () in the problem, we <i>always</i> start
        there. Parentheses group numbers together to tell us what needs to be done first. For example:
        <MathJax>{"\\[(2 + 3 )*4\\]"}</MathJax>
        Here, we solve 2 + 3 first because it's inside the parentheses. That gives us: 
        <MathJax>{"\\[5 * 4\\]"}</MathJax>
        Without parentheses, the answer might be different! That's why it's <b>so important</b> to check for parentheses first before doing anything else.
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
        <hr />
        <OrderOfOperations />
      </section>
    </MathJaxContext>
  );
};
