import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Ticket, Users, Settings, LogOut, X } from 'lucide-react';
import './AdminSidebar.css';

const AdminSidebar = ({ onLogout, isOpen, setIsOpen }) => {
  return (
    <aside className={`admin-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo-group">
          <div className="sidebar-logo-box"></div>
          <div className="sidebar-brand">
            <span className="brand-title">DATA RECOVERY</span>
            <span className="brand-subtitle">ADMIN PORTAL</span>
          </div>
        </div>
        <button className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/admin" end onClick={() => setIsOpen && setIsOpen(false)} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/requests" onClick={() => setIsOpen && setIsOpen(false)} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Ticket size={20} />
          <span>Service Requests</span>
        </NavLink>
        <NavLink to="/admin/customers" onClick={() => setIsOpen && setIsOpen(false)} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={20} />
          <span>Customers</span>
        </NavLink>
        <NavLink to="/admin/settings" onClick={() => setIsOpen && setIsOpen(false)} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
