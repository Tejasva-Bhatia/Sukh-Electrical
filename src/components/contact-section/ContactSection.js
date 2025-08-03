import React from 'react';
import './ContactSection.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function ContactSection({ isHomePage }) {
  return (
    <section className={isHomePage ? "contact-section" : "contact-section-standalone"}>
      <div className="contact-section-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info-container">
          <div className="contact-text-cont">
            <p>
            Hi, I’m Sukhwinder Bhatia, owner of SUKH ELECTRICAL PTY LTD. Based in Wattle Grove, Western Australia, I deliver expert electrical services across WA with a focus on quality. Licensed by the Electrical Licensing Board WA (Licence #EC014990), I tackle jobs of any size or complexity with proven skill. Feel free to contact me with any electrical needs—I’m committed to helping you.
            </p>
          </div>
          <div className="contact-details-wrapper">
            <div className="contact-details">
              <div className="contact-header">
                <p className="contact-name">Sukhwinder Bhatia</p>
              </div>
              <div className="contact-info">
                <div className="phone cont">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+610450723673">0450 723 673</a>
                </div>
                <div className="email cont">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:ssb@sukhelectrical.com.au">ssb@sukhelectrical.com.au</a>
                </div>
                <div className="address cont">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>7 Tristam Lane, Wattle Grove, WA 6107</span>
                </div>
                <div className="social-media-links-container">
                  <Link
                    className='social-link'
                    to={'//www.facebook.com/profile.php?id=100086633552378&sk=reels_tab'}
                    target='_blank'
                    aria-label='Facebook'
                  >
                    <FaFacebookSquare />
                  </Link>
                  <Link
                    className='social-link'
                    to={'//www.instagram.com/sukhelectrical'}
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <img className="client-photo" src="/images/Sukhwinder.jpg" alt="Sukhwinder Bhatia" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;