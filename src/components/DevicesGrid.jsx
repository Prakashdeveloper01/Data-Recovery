import React from 'react';
import { HardDrive, Server, Smartphone, Usb, MonitorSmartphone, Database, Camera, Monitor } from 'lucide-react';
import './DevicesGrid.css';

const devices = [
  { icon: <HardDrive size={32} />, name: "Hard Drives (HDD)" },
  { icon: <HardDrive size={32} />, name: "Solid State Drives (SSD)" },
  { icon: <Usb size={32} />, name: "USB Flash Drives" },
  { icon: <Smartphone size={32} />, name: "Memory Cards" },
  { icon: <Server size={32} />, name: "RAID Servers" },
  { icon: <MonitorSmartphone size={32} />, name: "Laptops & Desktops" },
  { icon: <Smartphone size={32} />, name: "Mobile Phones" },
  { icon: <Camera size={32} />, name: "CCTV & DVR" },
];

const DevicesGrid = () => {
  return (
    <section className="devices-section">
      <div className="container">
        <h3 className="devices-title">We Recover Data From Almost Everything</h3>
        <div className="devices-grid">
          {devices.map((device, index) => (
            <div key={index} className="device-card">
              <div className="device-icon">{device.icon}</div>
              <span className="device-name">{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesGrid;
