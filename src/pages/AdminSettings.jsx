import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

function AdminSettings() {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Prakash', email: 'admin@datarecoverylab.in', role: 'Super Admin', avatar: 'P' },
    { id: 2, name: 'Alex Johnson', email: 'alex@datarecoverylab.in', role: 'Manager', avatar: 'A' },
  ]);

  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', role: 'Technician', password: '' });

  const handleAddAdmin = (e) => {
    e.preventDefault();
    if (!newAdmin.name || !newAdmin.email || !newAdmin.password) return;

    const addedAdmin = {
      id: Date.now(),
      name: newAdmin.name,
      email: newAdmin.email,
      role: newAdmin.role,
      avatar: newAdmin.name.charAt(0).toUpperCase()
    };

    setAdmins([...admins, addedAdmin]);
    setNewAdmin({ name: '', email: '', role: 'Technician', password: '' });
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-title-area">
        <h1 className="dashboard-title">Settings & Management</h1>
        <p className="dashboard-subtitle">Configure your admin portal and manage users.</p>
      </div>

      <div className="settings-grid">
        {/* User Management Section */}
        <div className="settings-column">
          <div className="dashboard-panel" style={{ marginBottom: '30px' }}>
            <div className="panel-header">
              <h3 className="panel-title">Active Admins</h3>
            </div>
            <div className="admin-list">
              {admins.map((admin) => (
                <div className="admin-list-item" key={admin.id}>
                  <div className="admin-list-info">
                    <div className="admin-avatar">{admin.avatar}</div>
                    <div>
                      <span className="admin-name">{admin.name}</span>
                      <span className="admin-role">{admin.email} &bull; {admin.role}</span>
                    </div>
                  </div>
                  <button className="btn-outline-small" style={{ color: '#ef4444' }}>Remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add New Admin Form */}
        <div className="settings-column">
          <div className="dashboard-panel">
            <div className="panel-header">
              <h3 className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="var(--primary)" /> Add New Admin
              </h3>
            </div>
            <div style={{ padding: '24px' }}>
              <form onSubmit={handleAddAdmin}>
                <div className="admin-form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    placeholder="e.g. John Doe"
                    value={newAdmin.name}
                    onChange={(e) => setNewAdmin({...newAdmin, name: e.target.value})}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    className="admin-input" 
                    placeholder="john@datarecovery.com"
                    value={newAdmin.email}
                    onChange={(e) => setNewAdmin({...newAdmin, email: e.target.value})}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Role</label>
                  <select 
                    className="admin-select"
                    value={newAdmin.role}
                    onChange={(e) => setNewAdmin({...newAdmin, role: e.target.value})}
                  >
                    <option value="Technician">Technician</option>
                    <option value="Manager">Manager</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Temporary Password</label>
                  <input 
                    type="password" 
                    className="admin-input" 
                    placeholder="••••••••"
                    value={newAdmin.password}
                    onChange={(e) => setNewAdmin({...newAdmin, password: e.target.value})}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary-small" style={{ width: '100%', marginTop: '10px' }}>
                  Create Admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
