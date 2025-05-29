import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const VendorDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', boxSizing: 'border-box', width: '100%' }}>
        <PageHeader title="User Detail - Vendor" />

        {/* Profile Information */}
        <Section title="Profile Information">
          <Grid>
            <InfoItem label="Name" value="Ali Khan" />
            <InfoItem label="Email" value="ali@example.com" />
            <InfoItem label="Role" value="Vendor" />
            <InfoItem label="Status" value="Active" />
          </Grid>
        </Section>

        {/* Vendor Summary */}
        <Section title="Vendor Summary">
          <Grid>
            <InfoItem label="Total Lots" value="3" />
            <InfoItem label="Total Bookings" value="128" />
            <InfoItem label="Total Earnings" value="PKR 430,000" />
            <InfoItem label="Pending Payout" value="PKR 85,000" />
          </Grid>
        </Section>

        {/* Associated Parking Lots */}
        <Section title="Associated Parking Lots">
          <StyledTable
            headers={['Lot Name', 'Airport', 'Pricing Model', 'Status']}
            rows={[
              ['Airport Lot A', 'LHE', '24-Hour', 'Active'],
              ['Lot B - DHA', 'ISB', 'Day-End', 'Active']
            ]}
          />
        </Section>

        {/* Recent Bookings */}
        <Section title="Recent Bookings">
          <StyledTable
            headers={['Booking ID', 'Customer', 'Parking Lot', 'Amount', 'Date']}
            rows={[
              ['#B1050', 'Sarah Ahmed', 'Airport Lot A', 'PKR 1,200', '22 May 2025'],
              ['#B1049', 'Hamza Tariq', 'Lot B - DHA', 'PKR 950', '21 May 2025']
            ]}
          />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{
    background: '#FFFFFF',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  }}>
    <h2 style={{ marginTop: 0 }}>{title}</h2>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem'
  }}>
    {children}
  </div>
);

const InfoItem = ({ label, value }) => (
  <div style={{
    background: '#F8FAFC',
    padding: '1rem',
    borderRadius: '6px'
  }}>
    <strong>{label}:</strong> {value}
  </div>
);

const StyledTable = ({ headers, rows }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
    <thead>
      <tr style={{ backgroundColor: '#F1F5F9' }}>
        {headers.map((header, index) => (
          <th key={index} style={tableHeaderStyle}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rIndex) => (
        <tr key={rIndex}>
          {row.map((cell, cIndex) => (
            <td key={cIndex} style={tableCellStyle}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const tableHeaderStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  fontWeight: 600
};

const tableCellStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0'
};

export default VendorDetail;
