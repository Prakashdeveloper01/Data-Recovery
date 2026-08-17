import React from 'react';
import { Package, Search, ClipboardCheck, Settings, CloudDownload } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Package size={24} />,
    title: "1. Device Received",
    desc: "We receive your device and register it securely."
  },
  {
    icon: <Search size={24} />,
    title: "2. Free Evaluation",
    desc: "Our experts evaluate the issue and provide a report."
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "3. Quote & Approval",
    desc: "You receive a quote. We proceed after approval."
  },
  {
    icon: <Settings size={24} />,
    title: "4. Recovery Process",
    desc: "We use advanced tools to recover your data."
  },
  {
    icon: <CloudDownload size={24} />,
    title: "5. Data Delivery",
    desc: "Recovered data is tested & delivered safely to you."
  }
];

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <h4 className="section-subtitle" style={{ color: '#3b82f6' }}>OUR PROCESS</h4>
        <h2 className="section-title" style={{ color: '#fff', marginBottom: '60px' }}>Our Data Recovery Process</h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
