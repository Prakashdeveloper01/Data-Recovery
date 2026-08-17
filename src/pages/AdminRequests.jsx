import React, { useState } from 'react';
import { X } from 'lucide-react';

function AdminRequests() {
  const [requests, setRequests] = useState([
    { id: 'REQ-1042', customer: 'Arun Kumar', email: 'arun@example.com', device: 'WD Blue 1TB HDD', issue: 'Making clicking noises, not detected by OS', status: 'Evaluating', date: 'Oct 24, 2026' },
    { id: 'REQ-1041', customer: 'Priya Tech', email: 'priya@example.com', device: 'Samsung 970 EVO', issue: 'Accidental format, missing project files', status: 'Recovering', date: 'Oct 23, 2026' },
    { id: 'REQ-1040', customer: 'Global Designs', email: 'contact@globaldesigns.in', device: 'Seagate 2TB Ext', issue: 'Dropped from desk, completely dead', status: 'Completed', date: 'Oct 21, 2026' },
    { id: 'REQ-1039', customer: 'Rahul M.', email: 'rahul.m@example.com', device: 'SanDisk 64GB USB', issue: 'USB bent, cannot insert properly', status: 'Pending Approval', date: 'Oct 20, 2026' },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editStatus, setEditStatus] = useState('');

  const handleManage = (req) => {
    setSelectedRequest(req);
    setEditStatus(req.status);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  const handleSaveStatus = () => {
    setRequests(requests.map(r => 
      r.id === selectedRequest.id ? { ...r, status: editStatus } : r
    ));
    setSelectedRequest(null);
  };

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
        <h1 className="dashboard-title">Service Requests</h1>
        <p className="dashboard-subtitle">Manage and track all customer data recovery requests.</p>
      </div>
      
      <div className="dashboard-panel">
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
              {requests.map((req) => (
                <tr key={req.id}>
                  <td className="font-medium">{req.id}</td>
                  <td>{req.customer}</td>
                  <td className="text-muted">{req.device}</td>
                  <td className="text-muted">{req.date}</td>
                  <td>{getStatusBadge(req.status)}</td>
                  <td>
                    <button className="btn-link" onClick={() => handleManage(req)}>Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedRequest && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Request {selectedRequest.id}</h3>
              <button className="close-btn" onClick={handleCloseModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="detail-row">
                <span className="detail-label">Customer Name</span>
                <span className="detail-value">{selectedRequest.customer}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email Address</span>
                <span className="detail-value">{selectedRequest.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Device Type</span>
                <span className="detail-value">{selectedRequest.device}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Issue Description</span>
                <span className="detail-value" style={{ textAlign: 'right', maxWidth: '250px' }}>{selectedRequest.issue}</span>
              </div>
              
              <div className="admin-form-group" style={{ marginTop: '24px' }}>
                <label>Update Status</label>
                <select 
                  className="admin-select"
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                >
                  <option value="Evaluating">Evaluating</option>
                  <option value="Pending Approval">Pending Approval</option>
                  <option value="Recovering">Recovering</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-outline-small" onClick={handleCloseModal}>Cancel</button>
              <button className="btn-primary-small" onClick={handleSaveStatus}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminRequests;
