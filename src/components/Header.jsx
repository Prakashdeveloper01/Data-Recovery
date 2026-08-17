import React, { useState } from 'react';
import { Mail, Phone, Menu, X, Moon, Sun } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-contact">
            <a href="mailto:support@datarecoverylab.in"><Mail size={14} /> support@datarecoverylab.in</a>
            <a href="tel:+919159545555"><Phone size={14} /> +91 91595 45555</a>
          </div>
          <div className="top-tagline">
            We recover what others can't!
          </div>
          <div className="top-social">
            <a href="#"><FaFacebookF size={14} /></a>
            <a href="#"><FaInstagram size={14} /></a>
            <a href="#"><FaYoutube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="main-nav">
        <div className="container nav-inner">
          <div className="logo">
            <div className="logo-icon">
              {/* Minimal logo representation */}
              <div className="logo-inner-box"></div>
            </div>
            <div className="logo-text">
              <span className="logo-title">DATA</span>
              <span className="logo-title">RECOVERY LAB</span>
              <span className="logo-subtitle">We Recover Your Precious Data</span>
            </div>
          </div>
          
          <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="active" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <div className="nav-dropdown">
              <a href="#services" className="dropdown-btn" onClick={(e) => { e.preventDefault(); setIsServicesOpen(!isServicesOpen); }}>
                Services <span className="chevron">{isServicesOpen ? '▲' : '▼'}</span>
              </a>
              <div className={`dropdown-content ${isServicesOpen ? 'mobile-open' : ''}`}>
                <a href="#services" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>Hard Drive Recovery</a>
                <a href="#services" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>SSD Data Recovery</a>
                <a href="#services" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>RAID Recovery</a>
                <a href="#services" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>Mobile Data Recovery</a>
                <a href="#services" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>Memory Card Recovery</a>
                <a href="#services" onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>CCTV/DVR Recovery</a>
              </div>
            </div>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>Recovery Process</a>
            <a href="#tracking" onClick={() => setIsMenuOpen(false)}>Work Progress Tracking <span className="badge">New</span></a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Success Stories</a>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <button className="theme-toggle-btn-mobile" onClick={toggleTheme}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="nav-cta">
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                <Phone size={16} /> Free Consultation
              </button>
              <span className="cta-sub">Quick & No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
