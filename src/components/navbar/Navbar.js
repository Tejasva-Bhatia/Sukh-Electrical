import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ scrollToTop }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showLinks = () => {
    if (window.innerWidth >= 960) {
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showLinks);
    // Add touch event for mobile
    window.addEventListener('touchstart', showLinks);
    return () => {
      window.removeEventListener('resize', showLinks);
      window.removeEventListener('touchstart', showLinks);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className="nav-item" onClick={scrollToTop}>
              <NavLink exact to='/' className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/services' className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/projects' className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Projects
              </NavLink>
            </li>
            <li className={click ? "nav-item-hide" : "nav-item"}>
              <NavLink to='/reviews' className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Reviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;