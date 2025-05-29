import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const UserDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
        <PageHeader title="User Detail - Customer" />

        {/* Profile Section */}
        <div style={sectionStyle}>
          <h2 style={sectionHeading}>Profile Information</h2>
          <div style={gridStyle}>
            <div style={infoItem}><strong>Name:</strong> Sarah Ahmed</div>
            <div style={infoItem}><strong>Email:</strong> sarah@example.com</div>
            <div style={infoItem}><strong>Role:</strong> Customer</div>
            <div style={infoItem}><strong>Status:</strong> Active</div>
          </div>
        </div>

        {/* Booking History */}
        <div style={sectionStyle}>
          <h2 style={sectionHeading}>Booking History</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Booking ID</th>
                <th style={thStyle}>Parking Lot</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>#B1085</td>
                <td style={tdStyle}>Airport Lot A</td>
                <td style={tdStyle}>PKR 1,200</td>
                <td style={tdStyle}>Confirmed</td>
                <td style={tdStyle}>23 May 2025</td>
                <td style={tdStyle}><button style={resendBtn}>Resend Invoice</button></td>
              </tr>
              <tr>
                <td style={tdStyle}>#B1070</td>
                <td style={tdStyle}>Lot B - DHA</td>
                <td style={tdStyle}>PKR 950</td>
                <td style={tdStyle}>Completed</td>
                <td style={tdStyle}>14 May 2025</td>
                <td style={tdStyle}><button style={resendBtn}>Resend Invoice</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Styling Constants
const sectionStyle = {
  background: '#FFFFFF',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  marginBottom: '2rem'
};

const sectionHeading = {
  marginTop: 0,
  marginBottom: '1rem',
  fontSize: '1.25rem'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1rem'
};

const infoItem = {
  background: '#F8FAFC',
  padding: '1rem',
  borderRadius: '6px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1rem'
};

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  backgroundColor: '#F1F5F9'
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  textAlign: 'left'
};

const resendBtn = {
  background: '#2563EB',
  color: '#fff',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default UserDetail;
