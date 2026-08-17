import React from 'react';
import { ShieldCheck, Search } from 'lucide-react';
import './Tracking.css';

const Tracking = () => {
  return (
    <section id="tracking" className="tracking-section">
      <div className="container">
        <h4 className="section-subtitle" style={{ textAlign: 'left' }}>TRACK YOUR RECOVERY</h4>
        
        <div className="tracking-container">
          <div className="tracking-left">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '15px' }}>Stay Updated in Real Time</h2>
            <p className="tracking-desc">Enter your tracking ID to check the real-time status of your data recovery.</p>
            
            <div className="tracking-illustration">
              <div className="illustration-placeholder">
                <Search size={40} color="var(--primary)" />
              </div>
            </div>
          </div>
          
          <div className="tracking-right">
            <div className="tracking-input-group">
              <input type="text" placeholder="Enter your Tracking ID" className="tracking-input" />
              <button className="btn-primary tracking-btn">Track Now →</button>
            </div>
            <div className="tracking-example">Example: DRL123456</div>
            
            <div className="tracking-status-bar">
              <div className="status-line"></div>
              
              <div className="status-step active">
                <div className="status-icon">✓</div>
                <div className="status-text">Device Received</div>
                <div className="status-date">May 19, 10:30 AM</div>
              </div>
              
              <div className="status-step active">
                <div className="status-icon">✓</div>
                <div className="status-text">Evaluation</div>
                <div className="status-date">May 19, 01:15 PM</div>
              </div>
              
              <div className="status-step current">
                <div className="status-icon">○</div>
                <div className="status-text" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Recovery In Progress</div>
                <div className="status-date" style={{ color: 'var(--primary)' }}>May 20, 11:45 AM</div>
              </div>
              
              <div className="status-step">
                <div className="status-icon"></div>
                <div className="status-text">Quality Check</div>
                <div className="status-date">Pending</div>
              </div>
              
              <div className="status-step">
                <div className="status-icon"></div>
                <div className="status-text">Ready for Delivery</div>
                <div className="status-date">Pending</div>
              </div>
            </div>
            
            <div className="tracking-guarantee">
              <ShieldCheck className="guarantee-icon" size={20} />
              <div className="guarantee-text">
                <strong>Your data is in safe hands.</strong>
                <p>We maintain 100% confidentiality and follow industry best practices.</p>
              </div>
              <button className="btn-outline guarantee-btn" style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>View All Updates</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
