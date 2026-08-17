import React from 'react';
import { ShieldCheck, CheckCircle2, Search, Users, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional<br/>
            Data Recovery Services<br/>
            <span className="text-highlight">You Can Rely On</span>
          </h1>
          <p className="hero-description">
            We specialize in recovering lost, deleted, or inaccessible data from all storage devices with industry-leading success rate.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <ShieldCheck className="feature-icon" />
              <div>
                <h4>100% Confidential</h4>
                <p>Your data is safe with us</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <div>
                <h4>No Data, No Charge</h4>
                <p>You pay only if we recover</p>
              </div>
            </div>
            <div className="feature-item">
              <Search className="feature-icon" />
              <div>
                <h4>Quick Evaluation</h4>
                <p>Free diagnosis & estimate</p>
              </div>
            </div>
            <div className="feature-item">
              <Users className="feature-icon" />
              <div>
                <h4>Expert Technicians</h4>
                <p>10+ Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary btn-large">Get Free Evaluation</button>
            <button className="btn-outline btn-large">
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hard Drive and SSD Data Recovery" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
