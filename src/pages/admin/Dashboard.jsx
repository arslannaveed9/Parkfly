import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import StatCard from '../../components/StatCard';
import ReusableTable from '../../components/ReusableTable';

const Dashboard = () => {
  const cardData = [
    { title: 'Total Users', value: '1,204' },
    { title: 'Total Parking Lots', value: '312' },
    { title: 'Total Bookings (This Month)', value: '867' },
    { title: 'Total Revenue', value: 'PKR 1,540,000' }
  ];

  const tableHeaders = ['Booking ID', 'User', 'Lot', 'Amount', 'Status', 'Date'];
  const tableData = [
    {
      'Booking ID': '#B1023',
      'User': 'Ali Khan',
      'Lot': 'Airport Lot A',
      'Amount': 'PKR 1,200',
      'Status': 'Confirmed',
      'Date': '22 May 2025'
    },
    {
      'Booking ID': '#B1022',
      'User': 'Sarah Ahmed',
      'Lot': 'Lot B - DHA',
      'Amount': 'PKR 950',
      'Status': 'Pending',
      'Date': '21 May 2025'
    }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Dashboard Overview" />

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {cardData.map((card, index) => (
            <StatCard key={index} title={card.title} value={card.value} />
          ))}
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Daily Bookings & Revenue</h3>
          <div style={{ height: '200px', textAlign: 'center', color: '#aaa', fontStyle: 'italic' }}>
            (Chart Placeholder)
          </div>
        </div>

        <div style={{ marginTop: '2rem', background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Recent Bookings</h3>
          <ReusableTable headers={tableHeaders} data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;