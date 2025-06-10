import React from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';
import ReusableTable from '../../components/ReusableTable';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { CalendarCheck2, DollarSign, Wallet, MapPin } from 'lucide-react';

const VendorDashboard = () => {
  const cardData = [
    {
      title: 'Total Bookings',
      value: '128',
      icon: <CalendarCheck2 color="#3B82F6" size={24} />,
      bg: 'rgba(59, 130, 246, 0.1)'
    },
    {
      title: 'Total Earnings',
      value: '$4,300',
      icon: <DollarSign color="#10B981" size={24} />,
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: 'Upcoming Payout',
      value: '$850',
      icon: <Wallet color="#F59E0B" size={24} />,
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Active Lots',
      value: '3',
      icon: <MapPin color="#EF4444" size={24} />,
      bg: 'rgba(239, 68, 68, 0.1)'
    }
  ];

  const earningsData = [
    { month: 'Jan', earnings: 800 },
    { month: 'Feb', earnings: 950 },
    { month: 'Mar', earnings: 1100 },
    { month: 'Apr', earnings: 1300 },
    { month: 'May', earnings: 1600 },
    { month: 'Jun', earnings: 1450 },
    { month: 'Jul', earnings: 1700 },
    { month: 'Aug', earnings: 1900 },
    { month: 'Sep', earnings: 2100 },
    { month: 'Oct', earnings: 2250 },
    { month: 'Nov', earnings: 2000 },
    { month: 'Dec', earnings: 2400 }
  ];

  const tableHeaders = ['Booking ID', 'Customer', 'Lot', 'Amount', 'Status', 'Date'];
  const tableData = [
    {
      'Booking ID': '#B1085',
      'Customer': 'Sarah Ahmed',
      'Lot': 'Airport Lot A',
      'Amount': '$120',
      'Status': 'Confirmed',
      'Date': '23 May 2025'
    },
    {
      'Booking ID': '#B1084',
      'Customer': 'Hamza Tariq',
      'Lot': 'Lot B - DHA',
      'Amount': '$95',
      'Status': 'Pending',
      'Date': '22 May 2025'
    }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Vendor Dashboard" />

        {/* Stat Cards */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {cardData.map((card, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                padding: '1.5rem',
                flex: '1 1 250px',
                minWidth: '220px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '0.95rem', color: '#6B7280' }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>
                  {card.value}
                </p>
              </div>
              <div
                style={{
                  background: card.bg,
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {card.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Earnings Chart */}
        <div
          style={{
            background: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Earnings Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Bookings Table */}
        <div
          style={{
            background: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Recent Bookings</h3>
          <ReusableTable headers={tableHeaders} data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
