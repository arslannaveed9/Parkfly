import React, { useState } from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';
import { useNavigate } from 'react-router-dom';

const VendorBookings = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const navigate = useNavigate();

  const bookings = [
    {
      id: '#VB1001',
      user: 'Ali Khan',
      lot: 'Vendor Lot A',
      date: '2025-06-10',
      amount: '$120',
      status: 'Confirmed',
    },
    {
      id: '#VB1002',
      user: 'Sara Ahmed',
      lot: 'Vendor Lot B',
      date: '2025-06-08',
      amount: '$95',
      status: 'Pending',
    },
  ];

  const filtered = bookings.filter((b) => {
    const matchSearch =
      b.user.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || b.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="My Bookings" />

        <div
          style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}
          >
            <input
              type="text"
              placeholder="Search by ID or name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={inputStyle}
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={inputStyle}
            >
              <option value="">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Booking ID</th>
                <th style={thStyle}>Customer</th>
                <th style={thStyle}>Parking Lot</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td style={tdStyle}>{b.id}</td>
                  <td style={tdStyle}>{b.user}</td>
                  <td style={tdStyle}>{b.lot}</td>
                  <td style={tdStyle}>{b.date}</td>
                  <td style={tdStyle}>{b.amount}</td>
                  <td style={tdStyle}>{b.status}</td>
                  <td style={tdStyle}>
                    <button
                      style={buttonStyle}
                      onClick={() => navigate('/vendor/booking-detail')}
                    >
                      View
                    </button>
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
  whiteSpace: 'nowrap',
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'middle',
};

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  minWidth: '200px',
};

const buttonStyle = {
  background: '#3B82F6',
  color: '#fff',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.85rem',
  cursor: 'pointer',
};

export default VendorBookings;
