import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3 className="footer-logo">🏫 ABC Public School</h3>
            <p className="footer-tagline">Nurturing Bright Futures, Right From the Roots</p>
            <div className="footer-address">
              <p>Khairai Village, Khaga</p>
              <p>District Fatehpur, Uttar Pradesh</p>
              <p className="footer-timings">⏰ 8:00 AM – 2:00 PM, Monday to Saturday</p>
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
            <h4 className="footer-heading">Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Foundation (Nursery-UKG)</a></li>
              <li><a href="#">Primary (Class 1-5)</a></li>
              <li><a href="#">Middle School (Class 6-8)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">fb</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="WhatsApp">wa</a>
            </div>
            <p className="footer-phone">📞 +91 90000 00000</p>
            <p className="footer-email">✉️ info@abcschool.in</p>
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