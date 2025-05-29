import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const VendorRequests = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const requests = [
    {
      id: 'VR001',
      firstName: 'Ahmed',
      lastName: 'Khan',
      email: 'ahmed.khan@example.com',
      phone: '+92-300-1111111',
      message: 'Looking to register a parking lot in Lahore.'
    },
    {
      id: 'VR002',
      firstName: 'Sara',
      lastName: 'Ahmed',
      email: 'sara.ahmed@example.com',
      phone: '+92-321-2222222',
      message: 'DHA Karachi vendor request.'
    }
  ];

  const filteredRequests = requests.filter(req =>
    `${req.firstName} ${req.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    req.email.toLowerCase().includes(search.toLowerCase())
  );

  const requestDocs = (id) => {
    alert(`Requesting documents for ID: ${id}`);
  };

  const registerEmail = (id) => {
    alert(`Sending registration email for ID: ${id}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
        <PageHeader title="Vendor Registration Requests" />

        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          {/* Filters inside the section */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={inputStyle}
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)} style={inputStyle}>
              <option value="">Filter by status</option>
              <option value="new">New</option>
              <option value="reviewed">Reviewed</option>
            </select>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Message</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((req) => (
                <tr key={req.id}>
                  <td style={tdStyle}>{req.firstName} {req.lastName}</td>
                  <td style={tdStyle}>{req.email}</td>
                  <td style={tdStyle}>{req.phone}</td>
                  <td style={tdStyle}>{req.message}</td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '130px' }}>
                      <button style={buttonStyle('#4B5563')} onClick={() => requestDocs(req.id)}>Doc Request</button>
                      <button style={buttonStyle('#DC2626')} onClick={() => registerEmail(req.id)}>Register</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  fontWeight: '600',
  whiteSpace: 'nowrap'
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'middle'
};

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  minWidth: '240px'
};

const buttonStyle = (bgColor) => ({
  background: bgColor,
  color: '#fff',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.85rem',
  cursor: 'pointer',
  width: '100%'
});

export default VendorRequests;
