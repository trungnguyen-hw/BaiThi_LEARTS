import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer2-section section section-padding">
        <div className="container">
          <div className="row learts-mb-n40">
            {/* About Widget */}
            <div className="col-lg-6 learts-mb-40">
              <div className="widget-about">
                <Link to="/"><img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" /></Link>
                <p>
                  Learts is a beautifully crafted handmade shop e-commerce platform. We focus on giving you the best handcrafted goods with a clean, rustic look and premium user experience.
                </p>
              </div>
            </div>

            {/* Links Widget */}
            <div className="col-lg-4 learts-mb-40">
              <div className="row">
                <div className="col">
                  <ul className="widget-list">
                    <li><Link to="/about">About us</Link></li>
                    <li><a href="#">Store location</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#">Orders</a></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="widget-list">
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Support Policy</a></li>
                    <li><a href="#">Size Guide</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Widget */}
            <div className="col-lg-2 learts-mb-40">
              <ul className="widget-list">
                <li><i className="fab fa-twitter"></i> <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><i className="fab fa-facebook-f"></i> <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><i className="fab fa-instagram"></i> <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><i className="fab fa-youtube"></i> <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer2-copyright section">
        <div className="container">
          <p className="copyright text-center">&copy; 2026 learts. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
