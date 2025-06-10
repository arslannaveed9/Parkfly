import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';

const VendorSettings = () => {
  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', paddingRight: '2rem', width: '100%' }}>
        <PageHeader title="Settings" />

        {/* Profile Info */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Profile Information</h2>
          <div style={formGroup}>
            <label>Vendor Name</label>
            <input type="text" placeholder="Enter your business name" style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Save Profile</button>
        </div>

        {/* Change Email */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Change Email</h2>
          <div style={formGroup}>
            <label>New Email Address</label>
            <input type="email" placeholder="Enter new email" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Update Email</button>
        </div>

        {/* Change Password */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Change Password</h2>
          <div style={formGroup}>
            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label>Confirm New Password</label>
            <input type="password" placeholder="Re-enter new password" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

const sectionStyle = {
  background: '#fff',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  marginBottom: '2rem'
};

const sectionTitle = {
  marginBottom: '1rem',
  fontSize: '1.2rem',
  fontWeight: '600'
};

const formGroup = {
  marginBottom: '1rem'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '0.95rem'
};

const buttonStyle = {
  padding: '10px 18px',
  background: '#2563EB',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.95rem',
  marginTop: '0.5rem'
};

export default VendorSettings;
