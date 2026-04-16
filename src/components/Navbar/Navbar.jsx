import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          🏫 ABC Public School
        </a>
        
        <button 
          className="navbar-hamburger"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${isMobileOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="navbar-cta">
            <a href="#admissions" className="btn-primary" onClick={(e) => handleLinkClick(e, 'Admissions')}>
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;