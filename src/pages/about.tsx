import "../styles/about.scss";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="about-container">
      <h1>
        About <span>SimplyPi</span>
      </h1>
      <p>
        Hello!👋🏽 My name is{" "}
        <a href="https://github.com/Simpleboi" target="_blank">
          Nathaniel
        </a>
        , but most people just call me{" "}
        <a href="https://github.com/Simpleboi" target="_blank">
          Nate
        </a>
        . I'm a college student majoring in Computer Science, and I created{" "}
        <span>SimplyPi</span> to share my passion for learning and teaching.
        <br />
        <br />
        Back in high school, I kept all my school notes digitally on Google
        Docs. I was never a fan of pen & paper for notes, mainly because I could
        type faster than I could write. Anytime I learned something new, I would
        update my notes, refining and expanding them over time. My friends
        started asking for my notes and it was real easy to give it to them
        because they were just Google Docs, I could text them a copy of it. But
        then they'd often came to me for help with difficult subjects. That's
        when I realized how much I enjoyed breaking down complex topics and
        making them easier to understand. I did this throughout all of my high
        school years. By the time I got to college, I became a dedicated tutor
        in Math and Science working at a local tutoring workshop and on campus,
        I also became the President of the Computer Science Club at my campus.
        Teaching and inspiring others quickly became a passion of mine. But
        rather than just sharing my notes with a few friends, I wanted to build
        something bigger, a free platform where anyone, anywhere, could access
        STEM resources without barriers. That's how <span>SimplyPi</span> was
        born, an online learning hub designed to make Math & Science as{" "}
        <span>Simple</span> as <span>Pi</span>; Hence the name.
        <br />
        <br />
        <span>SimplyPi</span> is an open-source, community-driven project that
        encourages students to help each other learn and grow. I believe the
        modern education system is flawed, especially in how it teaches Math.
        Too often, students are left feeling frustrated or discouraged. I want
        to change that. This platform is built with the belief that anyone can
        learn Math & Science, they just need the right approach.{" "}
        <span>SimplyPi</span> is completely free, ensuring that students who
        can't afford expensive tutoring or resources still have access to clear,
        structured, and engaging educational materials.
        <br />
        <br />
        <span>SimplyPi</span> isn't just my personal project, it's a vision.
        This platform is open-source, and I welcome contributions from fellow
        learners, educators, and developers who share the idea of making STEM
        education accessible to everyone. This is{" "}
        <i>for students, by students</i>. I don't know everything and I
        encourage those to help add on to this vision. Whether you're here to
        learn, teach, or contribute, you're part of something bigger, a movement
        to make learning simple, fun, and available to all.
      </p>
      <h3>-Nate</h3>
      <h2>Want to Contribute?</h2>
      <hr />
      <h3>For Developers</h3>
      <p>
        SimplyPi is built with React, TypeScript, Firebase, and SCSS, but we're
        always looking to integrate new technologies to enhance the learning
        experience. If you'd like to contribute:
      </p>
      <ul>
        <li>
          Visit the GitHub repository{" "}
          <a href="https://github.com/Simpleboi/SimplyPi" target="_blank">
            Here
          </a>{" "}
          and check out open issues
        </li>
        <li>Fork the repository and start working on a feature or bug fix</li>
        <li>Submit a pull request, and let's collaborate!</li>
        <li>
          Join the community, Whether through discussions, feedback, or code
          contributions, your input matters
        </li>
      </ul>
      <p>
        <span>SimplyPi</span> welcomes developers who want to contribute to
        making education more accessible! Whether you're a beginner looking for
        a way to get started with open-source projects or an experienced
        developer passionate about education, your skills can make a real
        impact. By contributing, you'll help improve the platform by adding new
        features, fixing bugs, optimizing performance, or enhancing the user
        experience. We also encourage contributions from designers, educators,
        and content creators who want to help expand <span>SimplyPi's</span>{" "}
        resources.
      </p>
      <hr />
      <h3>For Educators</h3>
      <p>
        SimplyPi isn't just a platform for students, it's also a space for
        educators, tutors, and subject matter experts who want to make learning
        clearer, more engaging, and accessible to everyone. If you're a teacher,
        professor, tutor, or just someone passionate about explaining complex
        topics, your contributions can help shape the way students learn.
        <br />
        <br />
        Here are ways you can contribute:
      </p>
      <ul>
        <li>
          📚 Submit well-structured explanations, notes, or guides for math and
          science topics
        </li>
        <li>
          📝 Help students reinforce their knowledge by adding interactive
          exercises
        </li>
        <li>🎥 If you create educational content, we'd love to feature it!</li>
        <li>
          🔎 Ensure accuracy and clarity in existing notes and explanations
        </li>
        <li>
          💡 Show students how these concepts apply in careers, research, and
          daily life.
        </li>
      </ul>
      <p>
        <span>SimplyPi</span> is an open learning community, and we'd love for you to join us
        in creating a better way to learn. Whether you want to submit notes,
        suggest improvements, or create full lesson plans, your contributions
        will help students worldwide understand math & science in a way that
        actually makes sense Let us know how you'd like to contribute, visit the 
        <Link to="/contact"> Contact</Link> tab to learn how to get in contact with us. Submit your content
        , We can help format and integrate it into <span>SimplyPi's</span> courses. Let's
        Work together to make learning truly as <span>Simple</span> as <span>Pi</span>! Your expertise can
        change the way students approach math & science. Let's build a better
        learning experience together! 🚀
      </p>
    </section>
  );
};
