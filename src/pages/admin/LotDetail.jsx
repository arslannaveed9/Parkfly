import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const LotDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Parking Lot Detail" />

        <div style={{ background: '#fff', borderRadius: '10px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Lot Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div><strong>Lot Name:</strong> Airport Lot A</div>
            <div><strong>Location:</strong> Near LHE Airport</div>
            <div><strong>Airport:</strong> LHE</div>
            <div><strong>Vendor:</strong> Ali Khan</div>
            <div><strong>Pricing Model:</strong> 24-Hour Based</div>
            <div><strong>Status:</strong> Active</div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Slot & Booking Summary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div><strong>Total Slots:</strong> 50</div>
              <div><strong>Available Slots:</strong> 32</div>
              <div><strong>Total Bookings:</strong> 180</div>
              <div><strong>Revenue (This Month):</strong> PKR 120,000</div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Settings</h3>
            <button style={{ marginRight: '1rem', padding: '8px 14px', border: 'none', background: '#2563EB', color: '#fff', borderRadius: '6px' }}>Edit Lot</button>
            <button style={{ padding: '8px 14px', border: 'none', background: '#DC2626', color: '#fff', borderRadius: '6px' }}>Deactivate Lot</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LotDetail;
