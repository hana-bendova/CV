import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar">
      <div className="navbar-container">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? 'bar open' : 'bar'}></div>
          <div className={menuOpen ? 'bar open' : 'bar'}></div>
          <div className={menuOpen ? 'bar open' : 'bar'}></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#welcome-section" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
