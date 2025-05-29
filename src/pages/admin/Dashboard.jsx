import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import StatCard from '../../components/StatCard';
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
import { Users, MapPin, CalendarCheck2, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const cardData = [
    { title: 'Total Users', value: '1,204', icon: <Users color="#3B82F6" size={28} /> },
    { title: 'Total Parking Lots', value: '312', icon: <MapPin color="#10B981" size={28} /> },
    { title: 'Total Bookings (This Month)', value: '867', icon: <CalendarCheck2 color="#F59E0B" size={28} /> },
    { title: 'Total Revenue', value: '$12,540', icon: <DollarSign color="#EF4444" size={28} /> }
  ];

  const bookingsChart = [
    { month: 'Jan', bookings: 450 },
    { month: 'Feb', bookings: 520 },
    { month: 'Mar', bookings: 610 },
    { month: 'Apr', bookings: 730 },
    { month: 'May', bookings: 860 },
    { month: 'Jun', bookings: 910 },
    { month: 'Jul', bookings: 670 },
    { month: 'Aug', bookings: 780 },
    { month: 'Sep', bookings: 820 },
    { month: 'Oct', bookings: 790 },
    { month: 'Nov', bookings: 720 },
    { month: 'Dec', bookings: 860 }
  ];

  const tableHeaders = ['Booking ID', 'User', 'Lot', 'Amount', 'Status', 'Date'];
  const tableData = [
    {
      'Booking ID': '#B1023',
      'User': 'Ali Khan',
      'Lot': 'Airport Lot A',
      'Amount': '$9.80',
      'Status': 'Confirmed',
      'Date': '22 May 2025'
    },
    {
      'Booking ID': '#B1022',
      'User': 'Sarah Ahmed',
      'Lot': 'Lot B - DHA',
      'Amount': '$7.60',
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
            <StatCard key={index} title={card.title} value={card.value} icon={card.icon} />
          ))}
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Monthly Bookings Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={bookingsChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
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
