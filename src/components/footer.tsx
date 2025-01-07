import "../styles/footer.scss";

export const QuickLinks = () => {
  return (
    <div className="footer-section footer-card-one">
      <h3>Quick Links</h3>
      <div className="quick-links">
        <a href="#">Courses</a>
        <a href="#">Resources</a>
        <a href="#">About Us</a>
        <a href="#">Something</a>
      </div>
    </div>
  );
};

export const Newsletter = () => {
  return (
    <div className="footer-section footer-card-two">
      <h3>Newsletter</h3>
      <form action="https://formspree.io/f/xgvewpza" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export const ContactInfo = () => {
  return (
    <div className="footer-section footer-card-three">
      <h3>Contact Us</h3>
      <div className="social-media-links">
        <a href="https://www.instagram.com/n8.jsx/" target="_blank">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://github.com/Simpleboi/SimplyPi" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#">
          <i className="bx bx-envelope"></i>
        </a>
        <a href="https://www.youtube.com/@N8DotJsx/videos" target="_blank">
          <i className="bx bxl-youtube"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="footer-section footer-card-four">
      <h3>About SimplyPi</h3>
      <p>
        SimplyPi is a platform dedicated to helping students master math and
        computer science concepts with structured courses and resources, Simply!
        Whether you're preparing for exams or expanding your knowledge, we've
        got you covered in almost everything Computer Science related!
      </p>
    </div>
  );
};

export const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <p>&copy; 2024 SimplyPi. All Rights Reserved.</p>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <QuickLinks />
        <Newsletter />
        <ContactInfo />
        <AboutUs />
      </div>
      <FooterBottom />
    </footer>
  );
};
