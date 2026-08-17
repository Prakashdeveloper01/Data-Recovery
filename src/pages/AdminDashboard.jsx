import React from 'react';
import { TrendingUp, HardDrive, AlertCircle, CheckCircle } from 'lucide-react';

function AdminDashboard() {
  const recentRequests = [
    { id: 'REQ-1042', customer: 'Arun Kumar', device: 'WD Blue 1TB HDD', status: 'Evaluating', date: 'Oct 24, 2026' },
    { id: 'REQ-1041', customer: 'Priya Tech', device: 'Samsung 970 EVO', status: 'Recovering', date: 'Oct 23, 2026' },
    { id: 'REQ-1040', customer: 'Global Designs', device: 'Seagate 2TB Ext', status: 'Completed', date: 'Oct 21, 2026' },
    { id: 'REQ-1039', customer: 'Rahul M.', device: 'SanDisk 64GB USB', status: 'Pending Approval', date: 'Oct 20, 2026' },
    { id: 'REQ-1038', customer: 'Vijay Studios', device: 'RAID 5 Array', status: 'Completed', date: 'Oct 18, 2026' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed': return <span className="status-badge success">Completed</span>;
      case 'Recovering': return <span className="status-badge primary">Recovering</span>;
      case 'Evaluating': return <span className="status-badge warning">Evaluating</span>;
      default: return <span className="status-badge neutral">{status}</span>;
    }
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-title-area">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper blue">
            <HardDrive size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">Total Requests</p>
            <h3 className="stat-value">1,248</h3>
            <p className="stat-trend positive"><TrendingUp size={14} /> +12% from last month</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon-wrapper orange">
            <AlertCircle size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">In Progress</p>
            <h3 className="stat-value">34</h3>
            <p className="stat-trend neutral">12 awaiting approval</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper green">
            <CheckCircle size={24} />
          </div>
          <div className="stat-details">
            <p className="stat-label">Success Rate</p>
            <h3 className="stat-value">98.2%</h3>
            <p className="stat-trend positive"><TrendingUp size={14} /> +0.5% from last month</p>
          </div>
        </div>
      </div>

      {/* Recent Requests Table */}
      <div className="dashboard-panel">
        <div className="panel-header">
          <h3 className="panel-title">Recent Service Requests</h3>
          <button className="btn-outline-small">View All</button>
        </div>
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Customer Name</th>
                <th>Device</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentRequests.map((req, index) => (
                <tr key={index}>
                  <td className="font-medium">{req.id}</td>
                  <td>{req.customer}</td>
                  <td className="text-muted">{req.device}</td>
                  <td className="text-muted">{req.date}</td>
                  <td>{getStatusBadge(req.status)}</td>
                  <td>
                    <button className="btn-link">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
