import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';

const VendorBookingDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Booking Detail - B1085" />

        {/* Booking Information Section */}
        <div style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Booking Information</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>
            <div><strong>Booking Date:</strong> 22 May 2025</div>
            <div><strong>Customer:</strong> Sarah Ahmed</div>
            <div><strong>Customer Email:</strong> sarah.ahmed@example.com</div>
            <div><strong>Parking Lot:</strong> Airport Lot A</div>
            <div><strong>Start Date:</strong> 23 May 2025</div>
            <div><strong>End Date:</strong> 26 May 2025</div>
            <div><strong>Start Time:</strong> 09:00 AM</div>
            <div><strong>End Time:</strong> 07:00 PM</div>
            <div><strong>Total Days:</strong> 4 (based on pricing model)</div>
            <div><strong>Status:</strong> Confirmed</div>
            <div><strong>Payment Type:</strong> Online</div>
          </div>
        </div>

        {/* Invoice Summary Section */}
        <div style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Invoice Summary</h2>
          <div>
            <p><strong>Base Price:</strong> $25 x 4 Days = $100</p>
            <p><strong>Service Charges (Flat):</strong> $5</p>
            <p><strong>Tax (5%):</strong> $6</p>
            <p><strong><u>Total Paid:</u></strong> $111</p>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <button style={{
              marginRight: '1rem',
              padding: '8px 14px',
              border: 'none',
              background: '#DC2626',
              color: '#fff',
              borderRadius: '6px'
            }}>Cancel Booking</button>

            <button style={{
              padding: '8px 14px',
              border: 'none',
              background: '#2563EB',
              color: '#fff',
              borderRadius: '6px'
            }}>Resend Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorBookingDetail;
