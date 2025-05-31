import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Bookings = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [airportFilter, setAirportFilter] = useState('');
  const [rangeMode, setRangeMode] = useState('all');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(new Date().setDate(new Date().getDate() - 6)),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const bookings = [
    {
      id: 'B1023',
      user: 'Ali Khan',
      lot: 'Airport Lot A',
      airport: 'LHE',
      date: '29 MAY 25',
      amount: '$120',
      status: 'Confirmed',
    },
    {
      id: 'B1022',
      user: 'Sarah Ahmed',
      lot: 'Lot B - DHA',
      airport: 'ISB',
      date: '29 May 25',
      amount: '$95',
      status: 'Pending',
    }
  ];

  const filtered = bookings.filter(b => {
    const matchSearch = b.user.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    const matchAirport = !airportFilter || b.airport === airportFilter;
    const matchDate =
      rangeMode === 'all' ||
      (new Date(b.date) >= dateRange[0].startDate && new Date(b.date) <= dateRange[0].endDate);
    return matchSearch && matchAirport && matchDate;
  });

  const openDetail = (id) => {
    navigate(`/admin/bookings/${id}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Booking Management" />

        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search by ID, Parking Lot or User"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={inputStyle}
            />

            <select value={airportFilter} onChange={(e) => setAirportFilter(e.target.value)} style={inputStyle}>
              <option value="">Filter by Airport</option>
              <option value="LHE">LHE</option>
              <option value="ISB">ISB</option>
            </select>

            <select value={rangeMode} onChange={(e) => {
              setRangeMode(e.target.value);
              if (e.target.value === 'custom') setShowCalendar(true);
              else setShowCalendar(false);
            }} style={inputStyle}>
              <option value="all">All Bookings</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Booking ID</th>
                <th style={thStyle}>User</th>
                <th style={thStyle}>Parking Lot</th>
                <th style={thStyle}>Airport</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Amount ($)</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td style={tdStyle}>{b.id}</td>
                  <td style={tdStyle}>{b.user}</td>
                  <td style={tdStyle}>{b.lot}</td>
                  <td style={tdStyle}>{b.airport}</td>
                  <td style={tdStyle}>{format(new Date(b.date), 'dd MMM yyyy')}</td>
                  <td style={tdStyle}>{b.amount}</td>
                  <td style={tdStyle}>{b.status}</td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button style={buttonStyle('#4B5563')} onClick={() => openDetail(b.id)}>View</button>
                      <button style={buttonStyle('#DC2626')}>Cancel</button>
                      <button style={buttonStyle('#0EA5E9')}>Reschedule</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showCalendar && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            background: '#fff',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              rangeColors={['#3B82F6']}
            />
            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <button onClick={() => setShowCalendar(false)} style={buttonStyle('#3B82F6')}>Apply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  fontWeight: '600',
  whiteSpace: 'nowrap'
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'middle'
};

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  minWidth: '200px'
};

const buttonStyle = (bg) => ({
  background: bg,
  color: '#fff',
  padding: '6px 10px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.85rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
});

export default Bookings;
