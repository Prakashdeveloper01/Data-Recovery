import React from 'react';
import { Trophy, ShieldCheck, Users, Lock, Clock, Star, PhoneCall } from 'lucide-react';
import './Testimonials.css';

const stats = [
  { icon: <Trophy size={32} color="var(--primary)" />, value: "10+", label: "Years of Experience" },
  { icon: <ShieldCheck size={32} color="var(--primary)" />, value: "95%+", label: "Success Rate" },
  { icon: <Users size={32} color="var(--primary)" />, value: "5000+", label: "Happy Customers" },
  { icon: <Lock size={32} color="var(--primary)" />, value: "100%", label: "Data Confidentiality" },
  { icon: <Clock size={32} color="var(--primary)" />, value: "24-48 hrs", label: "Average Turnaround" }
];

const reviews = [
  {
    text: "Excellent service! They recovered all my important data from a badly damaged hard drive. Highly professional and reliable team.",
    name: "Arun Kumar",
    location: "Chennai"
  },
  {
    text: "Very quick response and genuine service. Got my data back in 2 days. Highly recommended!",
    name: "Priya S.",
    location: "Bangalore"
  },
  {
    text: "They recovered our company's critical data from RAID system. Great work and support!",
    name: "Vikram R.",
    location: "Hyderabad"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Stats Section */}
        <div className="stats-container">
          <div className="stats-header">
            <h4 className="section-subtitle" style={{ textAlign: 'left' }}>WHY CHOOSE US?</h4>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>Trusted By Thousands</h2>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-container">
          <div className="reviews-left">
            <h4 className="section-subtitle" style={{ textAlign: 'left' }}>WHAT OUR CUSTOMERS SAY</h4>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="reviewer">
                    <img src="/avatar.png" alt={review.name} className="reviewer-avatar" style={{ objectFit: 'cover' }} />
                    <div className="reviewer-info">
                      <div className="reviewer-name">{review.name}</div>
                      <div className="reviewer-location">{review.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reviews-right">
            <div className="cta-card" style={{ backgroundImage: 'linear-gradient(rgba(11,94,221,0.8), rgba(11,94,221,0.9)), url(/lab-technician.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h3 className="cta-title">Lost Your Data?<br/>We Can Help!</h3>
              <p className="cta-desc">Get in touch now for a FREE evaluation of your device.</p>
              <button className="btn-outline cta-btn">
                <PhoneCall size={16} /> Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
