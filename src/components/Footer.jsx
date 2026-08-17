import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            
            {/* Column 1: Logo & Info */}
            <div className="footer-col">
              <div className="footer-logo">
                <div className="footer-logo-icon"></div>
                <div className="footer-logo-text">
                  <span className="logo-title">DATA RECOVERY LAB</span>
                </div>
              </div>
              <p className="footer-desc">
                Professional data recovery services for all storage devices. Your data is safe with us.
              </p>
              <div className="footer-social">
                <a href="#"><FaFacebookF size={16} /></a>
                <a href="#"><FaInstagram size={16} /></a>
                <a href="#"><FaYoutube size={16} /></a>
                <a href="#"><FaLinkedinIn size={16} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Recovery Process</a></li>
                <li><a href="#">Work Progress Tracking</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-links">
                <li><a href="#">Hard Drive Recovery</a></li>
                <li><a href="#">SSD Data Recovery</a></li>
                <li><a href="#">RAID Recovery</a></li>
                <li><a href="#">Mobile Data Recovery</a></li>
                <li><a href="#">Memory Card Recovery</a></li>
                <li><a href="#">CCTV/DVR Recovery</a></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="footer-col">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Enquiry Form</a></li>
                <li><a href="#">Remote Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="footer-col footer-contact">
              <h4 className="footer-heading">Contact Us</h4>
              <ul>
                <li>
                  <Phone size={14} className="contact-icon" />
                  <span>+91 91595 45555</span>
                </li>
                <li>
                  <Mail size={14} className="contact-icon" />
                  <span>support@datarecoverylab.in</span>
                </li>
                <li>
                  <MapPin size={14} className="contact-icon" />
                  <span>No. 15, First Floor, (Example)<br/>Chennai - 600017, Tamil Nadu, India</span>
                </li>
                <li>
                  <Clock size={14} className="contact-icon" />
                  <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>© {new Date().getFullYear()} Data Recovery Lab. All Rights Reserved.</p>
            <a href="/admin/login" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '13px' }}>Admin Portal</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
