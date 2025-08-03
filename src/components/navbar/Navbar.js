import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ scrollToTop }) {
  const [click, setClick] = useState(false);
  const menuIconRef = useRef(null);

  const handleClick = (e) => {
    console.log('Toggle clicked, current state:', click); // Debug log
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop event bubbling
    if (click) {
      setTimeout(() => setClick(false), 0); // Delayed state update for mobile
    } else {
      setClick(true); // Open on bars click
    }
  };

  const closeMobileMenu = () => setClick(false);

  const showLinks = () => {
    if (window.innerWidth >= 960) {
      setClick(false);
    }
  };

  useEffect(() => {
    const handleTouchMove = (e) => e.preventDefault(); // Prevent scrolling during touch
    if (click && menuIconRef.current) {
      menuIconRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    window.addEventListener('resize', showLinks);
    window.addEventListener('touchstart', showLinks, { passive: true }); // iOS-friendly
    return () => {
      if (menuIconRef.current) {
        menuIconRef.current.removeEventListener('touchmove', handleTouchMove);
      }
      window.removeEventListener('resize', showLinks);
      window.removeEventListener('touchstart', showLinks);
    };
  }, [click]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" ref={menuIconRef} onClick={handleClick} onTouchStart={handleClick}>
            <span className="menu-icon-inner">{click ? <FaTimes /> : <FaBars />}</span>
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