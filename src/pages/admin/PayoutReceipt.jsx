import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const PayoutReceipt = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Payout Receipt" />

        <div style={{ background: '#fff', borderRadius: '10px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Payout Summary</h2>

          <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div><strong>Payout ID:</strong> P2024</div>
            <div><strong>Vendor:</strong> Ali Khan</div>
            <div><strong>Account Title:</strong> Ali Khan</div>
            <div><strong>Bank Name:</strong> Meezan Bank</div>
            <div><strong>Account Number:</strong> ****5678</div>
            <div><strong>IBAN:</strong> PK00MEZN0000001234567890</div>
            <div><strong>Payout Date:</strong> 28 May 2025</div>
            <div><strong>Status:</strong> Paid</div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Amount Breakdown</h3>
            <p><strong>Total Bookings Amount:</strong> PKR 150,000</p>
            <p><strong>Commission (10%):</strong> PKR 15,000</p>
            <p><strong>Tax (5%):</strong> PKR 6,750</p>
            <p><strong><u>Net Paid:</u></strong> PKR 128,250</p>
          </div>

          <button style={{ padding: '10px 16px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px' }}>Download Receipt</button>
        </div>
      </div>
    </div>
  );
};

export default PayoutReceipt;
