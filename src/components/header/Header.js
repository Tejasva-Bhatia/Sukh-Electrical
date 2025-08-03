import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [showOptions, setShowOptions] = useState(false);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleBookClick = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (event) => {
    if (emailRef.current && !emailRef.current.contains(event.target) && phoneRef.current && !phoneRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handleTouchOutside = (event) => {
    if (emailRef.current && !emailRef.current.contains(event.target) && phoneRef.current && !phoneRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside); // Handle touch events
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to='/'>
          <img className="main-logo" src="/images/Logo.png" alt="logo" onClick={scrollToTop} />
        </Link>
        <div className="info-container">
          <div className="quote-container">
            <i className="header-icon fas fa-clipboard"></i>
            <h4>Need a quote?</h4>
            <h2 className="book" onClick={handleBookClick}>BOOK US NOW</h2>
            {showOptions && (
              <>
                <div className="overlay" />
                <a href="mailto:ssb@sukhelectrical.com.au" className="option email-option" ref={emailRef} onClick={handleLinkClick}>
                  <div className="option-text">
                    Send Email to<br /><span className="highlight">ssb@sukhelectrical.com.au</span>
                  </div>
                </a>
                <a href="tel:+610450723673" className="option phone-option" ref={phoneRef} onClick={handleLinkClick}>
                  <div className="option-text">
                    Call<br /><span className="highlight">+61 0450 723 673</span>
                  </div>
                </a>
              </>
            )}
          </div>
          <div className="phone-container">
            <i className="header-icon fas fa-phone-alt"></i>
            <h4>Call us now</h4>
            <a className="mob" href="tel:+610450723673">0450 723 673</a>
          </div>
        </div>
      </div>
      <Navbar scrollToTop={scrollToTop} />
    </header>
  );
}

export default Header;