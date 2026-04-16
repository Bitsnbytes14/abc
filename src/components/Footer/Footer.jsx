import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3 className="footer-logo">🏫 ABC Public School</h3>
            <p className="footer-tagline">Empowering tomorrow's leaders today</p>
            <div className="footer-address">
              <p>123 Education Lane</p>
              <p>Pune, Maharashtra 411001</p>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#activities">Activities</a></li>
              <li><a href="#admissions">Admissions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Academics</h4>
            <ul className="footer-links">
              <li><a href="#">Primary School</a></li>
              <li><a href="#">Middle School</a></li>
              <li><a href="#">Secondary</a></li>
              <li><a href="#">Senior Secondary</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="Facebook">fb</a>
            </div>
            <p className="footer-phone">📞 +91 98765 43210</p>
            <p className="footer-email">✉️ admissions@abcpune.edu</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 ABC Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;