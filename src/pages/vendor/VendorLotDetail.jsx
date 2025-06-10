import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';

const VendorLotDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Parking Lot Detail" />

        <div style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          {/* General Lot Information */}
          <h2 style={{ marginBottom: '1rem' }}>Lot Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div><strong>Lot Name:</strong> Airport Lot A</div>
            <div><strong>Location:</strong> Near LHE Airport</div>
            <div><strong>Airport:</strong> LHE</div>
            <div><strong>Pricing Model:</strong> 24-Hour Based</div>
            <div><strong>Status:</strong> Active</div>
            <div><strong>Total Slots:</strong> 110</div>
            <div><strong>Base Price (Per Day):</strong> $20</div>
          </div>

          {/* Operation Hours */}
          <div style={{ marginTop: '2rem' }}>
            <h3>Operation Hours</h3>
            <p>The parking lot and your vehicle is available 24 hours a day, 7 days a week.</p>
            <table style={tableStyle}>
              <thead>
                <tr>{days.map(day => <th key={day} style={thStyle}>{day}</th>)}</tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} style={tdCenterStyle}>Available 24 hours every day</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Shuttle Hours */}
          <div style={{ marginTop: '2rem' }}>
            <h3>Shuttle Hours</h3>
            <p>The shuttle service is available 24/7</p>
            <table style={tableStyle}>
              <thead>
                <tr>{days.map(day => <th key={day} style={thStyle}>{day}</th>)}</tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} style={tdCenterStyle}>Available 24 hours every day</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Amenities */}
          <div style={{ marginTop: '2rem' }}>
            <h3>Amenities</h3>
            <p>CCTV, Valet Parking, Covered Parking, Shuttle Service</p>
          </div>

          {/* Map */}
          <div style={{ marginTop: '2rem' }}>
            <h3>Map Location</h3>
            <div style={{
              borderRadius: '10px',
              overflow: 'hidden',
              marginTop: '0.5rem',
              height: '300px',
              border: '1px solid #E5E7EB'
            }}>
              <iframe
                src="https://maps.google.com/maps?q=LHE%20Airport&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ width: '100%', height: '100%', border: 'none' }}
                loading="lazy"
                title="Parking Lot Map"
              />
            </div>
          </div>

          {/* Vendor Actions */}
          <div style={{ marginTop: '2rem' }}>
            <h3>Actions</h3>
            <button style={buttonStyle('#4B5563')}>Edit Lot</button>
            <button style={{ ...buttonStyle('#DC2626'), marginLeft: '1rem' }}>Deactivate Lot</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '0.5rem',
  border: '1px solid #E5E7EB'
};

const thStyle = {
  backgroundColor: '#F8FAFC',
  textAlign: 'center',
  padding: '12px',
  fontWeight: 600,
  border: '1px solid #E5E7EB'
};

const tdCenterStyle = {
  textAlign: 'center',
  padding: '14px',
  fontWeight: '500',
  color: '#1F2937',
  backgroundColor: '#F9FAFB',
  border: '1px solid #E5E7EB'
};

const buttonStyle = (bg) => ({
  background: bg,
  color: '#fff',
  padding: '8px 14px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
});

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default VendorLotDetail;