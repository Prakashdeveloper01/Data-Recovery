import React from 'react';
import { HardDrive, Smartphone, Server, Usb, Camera, Cpu } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <HardDrive size={32} />,
    title: "Hard Drive Recovery",
    desc: "Recover data from physically damaged, corrupted or formatted hard drives."
  },
  {
    icon: <Cpu size={32} />,
    title: "SSD Data Recovery",
    desc: "Advanced tools to recover data from failed or unresponsive SSDs."
  },
  {
    icon: <Server size={32} />,
    title: "RAID Data Recovery",
    desc: "Recover data from RAID 0, 1, 5, 6, 10 & other RAID configurations."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Data Recovery",
    desc: "Recover deleted photos, videos, contacts & more from all smartphones."
  },
  {
    icon: <Usb size={32} />,
    title: "Memory Card Recovery",
    desc: "Recover lost data from SD, microSD, CF & other memory cards."
  },
  {
    icon: <Camera size={32} />,
    title: "CCTV/DVR Recovery",
    desc: "Retrieve important footage from CCTV, DVR, NVR systems."
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h4 className="section-subtitle">OUR SERVICES</h4>
        <h2 className="section-title">Comprehensive Data Recovery Solutions</h2>
        <div className="title-underline"></div>
        
        <div className="services-grid-wrapper">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
                <div className="service-icon-plus">+</div>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <a href="#" className="service-link">Learn More <span className="arrow">→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
