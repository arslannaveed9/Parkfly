import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const Settings = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
          <PageHeader title="Platform Settings" />

        {/* Company Info */}
        <div style={sectionStyle}>
          <h2>Company Information</h2>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Company Name</label>
            <input type="text" defaultValue="ParkingReserve Pvt. Ltd" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Support Email</label>
            <input type="email" defaultValue="support@parkingreserve.com" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Contact Number</label>
            <input type="text" defaultValue="+92-300-1234567" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Upload Logo</label>
            <input type="file" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Save Company Settings</button>
        </div>

        {/* System Preferences */}
        <div style={sectionStyle}>
          <h2>System Preferences</h2>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Timezone</label>
            <select style={inputStyle}>
              <option>Asia/Karachi</option>
              <option>Asia/Dubai</option>
              <option>Asia/Kolkata</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Default Cancellation Window (hours)</label>
            <input type="number" defaultValue="12" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Save Preferences</button>
        </div>

        {/* Airports */}
        <div style={sectionStyle}>
          <h2>Manage Airports</h2>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Add Airport</label>
            <input type="text" placeholder="Enter Airport Name (e.g., LHE - Lahore)" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Add Airport</button>
        </div>

        {/* Service Charges */}
        <div style={sectionStyle}>
          <h2>Service Charge Settings</h2>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Service Charge Type</label>
            <select style={inputStyle}>
              <option value="flat">Flat Rate</option>
              <option value="percentage">Percentage</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Value (e.g., 100 PKR or 10%)</label>
            <input type="text" defaultValue="10%" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Update Service Charge</button>
        </div>

        {/* Tax Settings */}
        <div style={sectionStyle}>
          <h2>Airport-wise Tax Settings</h2>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Select Airport</label>
            <select style={inputStyle}>
              <option value="LHE">LHE - Lahore</option>
              <option value="ISB">ISB - Islamabad</option>
              <option value="KHI">KHI - Karachi</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Tax Percentage</label>
            <input type="text" defaultValue="5%" style={inputStyle} />
          </div>
          <button style={buttonStyle}>Update Airport Tax</button>
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  fontWeight: '600',
  marginBottom: '0.5rem'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  boxSizing: 'border-box'
};

const sectionStyle = {
  background: '#FFFFFF',
  padding: '1rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  marginBottom: '1rem'
};

const formGroupStyle = {
  marginBottom: '0.75rem'
};

const buttonStyle = {
  marginTop: '0.5rem',
  padding: '10px 16px',
  background: '#2563EB',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default Settings;
