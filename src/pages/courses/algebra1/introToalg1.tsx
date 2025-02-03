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
    <div id="whatIsAlgebra1">
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
      <h2 id="orderOfOperations">Order of Operations</h2>
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
        mixed up. Let's break each of these down step-by-step and see why the
        order of this matters!
      </p>
      <h3>Step 1: Parentheses (P)</h3>
      <p>
        If there are parentheses () in the problem, we <i>always</i> start by
        solving what's inside them first. Parentheses are like a math
        "container" that tells us to focus on a certain part of the problem
        before doing anything else. Parentheses group numbers together to tell
        us what needs to be done first. For example:
        <MathJax>{"\\[(2 + 3 )*4\\]"}</MathJax>
        Here, we solve 2 + 3 first because it's inside the parentheses. That
        gives us:
        <MathJax>{"\\[5 * 4\\]"}</MathJax>
        If we ignored the parentheses and just solved left to right, we might do
        3 x 4 first, which would give us the wrong answer. That's why
        parentheses come first, they group numbers together and tell us what to
        solve first. That's why it's <b>so important</b> to check for
        parentheses first before doing anything else.
      </p>
      <h3>Step 2: Exponents (E)</h3>
      <p>
        Next, we solve any exponents. Exponents are the tiny numbers that sit
        above a number, and they tell us to multiply the number by itself a
        certain number of times. For example:
        <MathJax>{"\\[3^2\\]"}</MathJax>
        This means 3 x 3, which equals 9:
        <MathJax>{"\\[3^2=3*3\\]"}</MathJax>
        <MathJax>{"\\[=3*3\\]"}</MathJax>
        <MathJax>{"\\[=9\\]"}</MathJax>
        Now let's look at a bigger problem:
        <MathJax>{"\\[5 + 2^3\\]"}</MathJax>
        We <b>must</b> solve the exponents first:
        <MathJax>{"\\[5 + (2*2*2)\\]"}</MathJax>
        <MathJax>{"\\[=5 + 8\\]"}</MathJax>
        <MathJax>{"\\[=13\\]"}</MathJax>
        If we just ignored the exponent and just added 5 + 2 first, we'd
        completely mess up the answer. That's why we always take care of
        exponents right after parentheses.
      </p>
      <h3>Step 3: Multiplication (M)</h3>
      <p>
        Now we move onto multiplication, but there's something really important
        at this step: Multiplication is <b>NOT</b> always done before division!
        We just solve them from left to right, whichever comes first. For
        example:
        <MathJax>{"\\[3 * 4 + 5\\]"}</MathJax>
        Here, we do <b>multiplication</b> first, because it's before addition:
        <MathJax>{"\\[12+5\\]"}</MathJax>
        <MathJax>{"\\[=17\\]"}</MathJax>
        Another example:
        <MathJax>{"\\[6+2*3\\]"}</MathJax>
        We <b>must</b> multiply first:
        <MathJax>{"\\[6+(2 * 3)\\]"}</MathJax>
        <MathJax>{"\\[=6+6\\]"}</MathJax>
        <MathJax>{"\\[=12\\]"}</MathJax>
        If we added 6 + 2 first, we'd get the wrong answer! That's why
        multiplication is always handled before addtion or subtraction.
      </p>
      <h3>Step 4: Division (D)</h3>
      <p>
        Division works the same way as multiplication, whichever one comes first
        from left to right. For example:
        <MathJax>{"\\[8 \\div 2 \\times4\\]"}</MathJax>
        We go left to right, so first we divide:
        <MathJax>{"\\[(8 \\div 2) \\times4\\]"}</MathJax>
        <MathJax>{"\\[=4 \\times4\\]"}</MathJax>
        <MathJax>{"\\[=16\\]"}</MathJax>
        but if we multiplied first, we'd get:
        <MathJax>{"\\[8 \\div (2 \\times4)\\]"}</MathJax>
        <MathJax>{"\\[=8 \\div 8\\]"}</MathJax>
        <MathJax>{"\\[=1\\]"}</MathJax>
        That's totally wrong! So we <b>must</b> follow the order of operations
        from left to right when multiplication and division are both in the same
        equation.
      </p>
      <h3>Step 5: Addition (A)</h3>
      <p>
        After finishing all parentheses, exponents, multiplication, and
        division, we <b>finally</b> move to addition. For example:
        <MathJax>{"\\[7+3+2\\]"}</MathJax>
        Since there's only addition here, we just go left to right:
        <MathJax>{"\\[(7+3)+2\\]"}</MathJax>
        <MathJax>{"\\[=10+2\\]"}</MathJax>
        <MathJax>{"\\[=12\\]"}</MathJax>
        But if there were other operations, we always handle them first before
        adding!
        <br />
        Let's look at a bigger problem:
        <MathJax>{"\\[4+6 \\times 2\\]"}</MathJax>
        In the order of PEMDAS, multiplication comes before addition, so we must
        do that first. So we can rewrite the problem as such:
        <MathJax>{"\\[4+(6\\times 2)\\]"}</MathJax>
        and solve as such:
        <MathJax>{"\\[=4+(12)\\]"}</MathJax>
        <MathJax>{"\\[=16\\]"}</MathJax>
        If we added first, we'd get{" "}
        <MathJax inline>{"\\(6 \\times 2=12\\)"}</MathJax>, which is wrong!
      </p>
      <h3>Step 6: Subtraction (S)</h3>
      <p>
        The very last thing we do is subtraction. Just like addition, we solve
        it after all the other steps are done. For example:
        <MathJax>{"\\[10-4-2\\]"}</MathJax>
        We move left to right, just like reading a sentence:
        <MathJax>{"\\[(10-4)-2\\]"}</MathJax>
        <MathJax>{"\\[=(6)-2\\]"}</MathJax>
        <MathJax>{"\\[=4\\]"}</MathJax>
        Now let's try a trickier one:
        <MathJax>{"\\[20-3\\times4\\]"}</MathJax>
        Multiplication comes before subtraction, so we solve 3 x 4 first:
        <MathJax>{"\\[20-(3\\times4)\\]"}</MathJax>
        <MathJax>{"\\[=20-(12)\\]"}</MathJax>
        <MathJax>{"\\[=8\\]"}</MathJax>
        if we subtracted first, we'd get 17 x 4 = 64, which is wrong. That's why
        subtraction comes last in the order.
      </p>
      <h3>Expressions vs. Equations - What's the Difference?</h3>
      <p>
        Before we move on, let's clear up something that confuses a lot of
        people: the difference between an expression and an equation.
        <br />
        <br />
        An <b>expression</b> is like a math sentence that includes numbers,
        variables, and operations but <b>no equal sign</b>. It's just a
        statement that represents something, but it can't be solved completely.
        For example:
        <MathJax>{"\\[3x+5\\]"}</MathJax>
        This is an expression because it doesn't tell us what{" "}
        <MathJax inline>{"\\(x\\)"}</MathJax> is equal to. It's like saying, "I
        have three times a mystery number plus five" but never telling us what
        the mystery number is.
        <br />
        <br />
        An <b>equation</b>, on the other hand, is a complete math statement with
        an equal sign (=). It shows balance between two sides and can be solved.
        For example:
        <MathJax>{"\\[3x+5=11\\]"}</MathJax>
        Now we can solve for <MathJax inline>{"\\(x\\)"}</MathJax>, because the
        equal sign tells us both sides are equal.
        <br />
        <br />
        Think of it this way:
        <br />
        <br />
        An <b>expression</b> is like half of a puzzle, it has pieces but no full
        picture. <br />
        an <b>equation</b> is like a complete puzzle, everything fits together
        to give an answer!
      </p>
      <h3>Let's See PEMDAS in Action!</h3>
      <p>
        Now that we know the rules, let's solve a real problem step by step:
        <MathJax>{"\\[6+(4\\times2^2)-5\\]"}</MathJax>
        Remember, the first letter in PEMDAS is parentheses, so we want to solve
        what's inside that first. With that said, we'll focus on{" "}
        <MathJax inline>{"\\((4\\times2^2)\\)"}</MathJax>
        <MathJax>{"\\[(4\\times2^2)\\]"}</MathJax>
        <MathJax>{"\\[=(4\\times4)\\]"}</MathJax>
        <MathJax>{"\\[=(16)\\]"}</MathJax>
        so now our expression looks like:
        <MathJax>{"\\[6+(16)-5\\]"}</MathJax>
        This expression is the same as:
        <MathJax>{"\\[6+16-5\\]"}</MathJax>
        Next we have addition and subtraction. But when we have both in the same
        statement, addition comes before subtraction. So we solve that first:
        <MathJax>{"\\[(6+16)-5\\]"}</MathJax>
        <MathJax>{"\\[=(22)-5\\]"}</MathJax>
        Now all that's left is the subtraction:
        <MathJax>{"\\[22-5\\]"}</MathJax>
        <MathJax>{"\\[=17\\]"}</MathJax>
        The final answer is 17!
      </p>
      <h3>Let's practice!</h3>
      <p>
        1. <MathJax inline>{"\\(8+2\\times5\\)"}</MathJax>
        <br />
        2. <MathJax inline>{"\\((6+4)\\div2\\)"}</MathJax>
        <br />
        3. <MathJax inline>{"\\(5\\times(3+7)-4)\\)"}</MathJax>
        <br />
        4. <MathJax inline>{"\\(12\\div(2\\times3)+1\\)"}</MathJax>
      </p>
      <br />
      The answer key to the section will be in 1.4 of the answers. Click <a href="#">here</a> to go there.
    </div>
  );
};

export const PropertiesOfAlg1 = () => {
  return (
    <div>
      <h2 id="propsOfAlg1">Basic Properties of Algebra</h2>
      <p>
        Algebra might seem like a bunch of rules and symbols, but at its core,
        it follows some simple and logical patterns. These patterns are called
        the <b>Basic Properties of Algebra</b>. They help us solve problems
        faster and easier by showing us how numbers behave when we add,
        multiply, and move things around. <br />
        Think of these Properties like the rules of a game, if you understand
        the rules, you can play smarter and solve problems without getting
        stuck!
      </p>
      <h3>The Communative Property (Switching the Order)</h3>
      <p>
        Imagine you're holding two apples in one hand and three apples in the
        other. No matter which hand you count first, the total is always{" "}
        <b>five apples</b>.
        <br />
        This is how the Communtative Property works! It says that the order of
        numbers doesn't matter when adding or multiplying.
        <br />
        <br />
        The property is as follows:
        <MathJax>{"\\[a+b=b+a\\]"}</MathJax>
        For example:
        <MathJax>{"\\[2+3=3=2\\]"}</MathJax>
        (Both equal to 5, so the order doesn't change the answer). This property
        also works for multiplication. The property is as follows:
        <MathJax>{"\\[a\\times b=b\\times a\\]"}</MathJax>
        For example:
        <MathJax>{"\\[4\\times7=7\\times4\\]"}</MathJax>
        (Both equal 28, so switching the order again doesn't matter)
        <br />
        <br />
        Something important to note is that this does <b>NOT</b> work for
        subtraction or division. I've seen it in the flesh and it's important to
        clarify that. The Commutative Property only works for addition and
        multiplication. For example:
        <MathJax>{"\\[10-3\\ne 3-10\\]"}</MathJax>
        10 - 3 is 7, but 3 - 10 is -7, which is very different.
      </p>
      <h3>The Associative Property (Grouping Doesn't Matter)</h3>
      <p>
        Think about how we group friends when taking a picture. Whether you
        stand on the left or the right doesn't change who's in the picture.{" "}
        <br />
        <br />
        The <b>Associative Property</b> tells us that when adding or
        multiplying, it doesn't matter how we group the numbers, the answer will
        still be the same!
        <br />
        In Addition for example:
        <MathJax>{"\\[(a+b)+c=a+(b+c)\\]"}</MathJax>
        An example of this is as follows:
        <MathJax>{"\\[(2+3)+4=2+(3+4)\\]"}</MathJax>
        Both equal 9, so grouping doesn't change the result.
        <br />
        In Multiplication the property looks like:
        <MathJax>
          {"\\[(a\\times b)\\times c = a \\times (b \\times c)\\]"}
        </MathJax>
        For example:
        <MathJax>{"\\[(2\\times3)\\times4=2\\times(3\\times4)\\]"}</MathJax>
        Both equal 24 no matter how you group them. But just like the
        Commutative property, this property doesn't work for subtraction or
        division. For example:
        <MathJax>{"\\[(10-5)-2 \\ne 10-(5-2)\\]"}</MathJax>
        One equals 3, and the other equals 7, totally different.
      </p>
      <h3>The Distributive Property (Sharing Numbers)</h3>
      <p>
        Imagine you have 3 boxes, and inside each box are 2 apples and 4
        oranges. Instead of counting each apple and orange separately, you can
        multiply to find the total faster. <br />
        <br />
        The <b>Distributive Property</b> lets us multiply a number by everything
        inside parentheses, like this:
        <MathJax>{"\\[a\\times(b+c)=a\\times b+a\\times c\\]"}</MathJax>
        Most often though, you'll see the property like this:
        <MathJax>{"\\[a(b+c)=a\\times b+a\\times c\\]"}</MathJax>
        anything touching parentheses means it's multiplying it. You'll see this
        notation very commonly in Algebra 2 and- well really anything past
        Algebra 2. For the sake of this Algebra 1 course, we'll use the:{" "}
        <MathJax inline>{"\\(a\\times b\\)"}</MathJax> notation but in Algerba 2
        and moving higher up, we'll use this notation:{" "}
        <MathJax inline>{"\\(ab\\)"}</MathJax> Both mean to multiply{" "}
        <MathJax inline>{"\\(a\\)"}</MathJax> and{" "}
        <MathJax inline>{"\\(b\\)"}</MathJax>
        <br />
        <br />
        An example of this property is as follows:
        <MathJax>{"\\[3\\times(2+4)\\]"}</MathJax>
        We distribute the 3 to both 2 and 4:
        <MathJax>{"\\[(3\\times2)+(3\\times4)\\]"}</MathJax>
        <MathJax>{"\\[=6+12\\]"}</MathJax>
        <MathJax>{"\\[=18\\]"}</MathJax>
        This property makes math easier when working with parentheses, and it's
        super useful in algebra when solving equations.
      </p>
      <h3>The Identity Properties (Numbers That Don't Change Anything)</h3>
      <p>
        Some numbers are like "quiet players" in math, they don't change
        anything when added or multiplied. <br />
        In Addition, we have:
        <MathJax>{"\\[a+0=a\\]"}</MathJax>
        an example of this is:
        <MathJax>{"\\[5+0=0\\]"}</MathJax>
        Adding zero doesn't change the number itself. In multiplication, we
        have:
        <MathJax>{"\\[a\\times1=a\\]"}</MathJax>
        An example of this is:
        <MathJax>{"\\[7\\times1=7\\]"}</MathJax>
        Multiplying by 1 keeps the number the same. These properties help us
        simplify math problems faster without changing the answer.
      </p>
      <h3>The Inverse Properties (Undoing a Number)</h3>
      <p>
        The Inverse Property is like pressing "undo" in math, it helps us cancel
        out numbers! <br />
        The Inverse Property of Addition is:
        <MathJax>{"\\[a+(-a)=0\\]"}</MathJax>
        For example:
        <MathJax>{"\\[8+(-8)=0\\]"}</MathJax>
        Adding a number and its opposite cancels them out!
        <br />
        <br />
        The Inverse Property of Multiplication is:
        <MathJax>{"\\[a\\times \\frac{1}{a}=1\\]"}</MathJax>
        For example:
        <MathJax>{"\\[5\\times \\frac{1}{5}=1\\]"}</MathJax>
        Multiplying by the reciprocal cancels the number out!
        <br />
        <br />
        These properties are really important when solving algebraic equations
        because they help us get rid of extra numbers to find the value of a
        variable.
      </p>
      <h3>Why Do These Properties Matter?</h3>
      <p>
        Math might seem like magic, but it's not random (unless you're in
        stats), it follows logical patterns. These basic properties make math
        consistent and predictable, so no matter who solves a problem, they'll
        always get the same answer if they follow the rules!
        <br />
        <br />
        Once you recognize these properties, you'll start seeing them everywhere
        in algebra. They make math way easier and help us build bigger ideas
        later on, like solving equations and graphing functions!
        <br />
        <br />
        The Basic Properties of Algebra are like math shortcuts that help us
        solve problems more easily and logically.
        <ul>
          <br />
          The <b>Commutative Property</b> lets us swap numbers in addition and
          multiplication.
          <br />
          The <b>Associative Property</b> lets us change how we group numbers
          without changing the answer.
          <br />
          The <b>Distributive Property</b> helps us break down parentheses when
          multiplying.
          <br />
          The <b>Identity Properties</b> tell us which numbers don't change
          anything.
          <br />
          The <b>Inverse Properties</b> let us cancel things out to simplify
          equations.
          <br />
        </ul>
        Understanding these rules make algebra easier and helps you build a
        strong foundation for more advanced math!
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
        <hr />
        <PropertiesOfAlg1 />
      </section>
    </MathJaxContext>
  );
};
