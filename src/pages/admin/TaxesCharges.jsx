import React from 'react';
import Sidebar from '../../components/Sidebar';

const TaxesCharges = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '1rem 2rem 2rem 2rem', width: '100%', boxSizing: 'border-box' }}>
        <div className="page-header" style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem' }}>Taxes & Charges</h1>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>Service Charge Settings</h2>
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

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>Airport-wise Tax Settings</h2>
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

const sectionStyle = {
  background: '#FFFFFF',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  marginBottom: '2rem'
};

const formGroupStyle = {
  marginBottom: '1rem'
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

const buttonStyle = {
  marginTop: '1rem',
  padding: '10px 16px',
  background: '#2563EB',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default TaxesCharges;
