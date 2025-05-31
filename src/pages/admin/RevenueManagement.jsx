import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { DollarSign, PieChart, Users, FileText } from 'lucide-react';

const RevenueManagement = () => {
  const navigate = useNavigate();

  const [cardLot, setCardLot] = useState('All');
  const [duration, setDuration] = useState('Monthly');
  const [showCalendar, setShowCalendar] = useState(false);
  const [customRange, setCustomRange] = useState([
    {
      startDate: new Date(new Date().setDate(new Date().getDate() - 6)),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [search, setSearch] = useState('');
  const [airportFilter, setAirportFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const statCards = [
    {
      title: 'Total Revenue (This Month)',
      value: '$15,400',
      icon: <DollarSign size={20} color="#1E3A8A" />,
      bg: 'rgba(30, 58, 138, 0.1)'
    },
    {
      title: 'Platform Share',
      value: '$3,400',
      icon: <PieChart size={20} color="#2563EB" />,
      bg: 'rgba(37, 99, 235, 0.1)'
    },
    {
      title: 'Vendors Share',
      value: '$12,000',
      icon: <Users size={20} color="#059669" />,
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: 'Tax Collected',
      value: '$500',
      icon: <FileText size={20} color="#F59E0B" />,
      bg: 'rgba(245, 158, 11, 0.1)'
    }
  ];

  const data = [
    { id: 'P1001', lot: 'Airport Lot A', vendor: 'Ali Khan', week: '20–26 May', amount: '$1,200', status: 'Unpaid', airport: 'LHE' },
    { id: 'P1002', lot: 'Lot B - DHA', vendor: 'Sarah Ahmed', week: '20–26 May', amount: '$950', status: 'Paid', airport: 'KHI' }
  ];

  const filteredData = data.filter(row => {
    const matchesSearch = row.lot.toLowerCase().includes(search.toLowerCase()) || row.vendor.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || row.status === statusFilter;
    const matchesAirport = airportFilter === 'All' || row.airport === airportFilter;
    return matchesSearch && matchesStatus && matchesAirport;
  });

  const handleViewReceipt = (row) => {
    navigate(`/admin/payouts/${row.id}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
        <PageHeader title="Revenue & Payouts" />

        {/* Card Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <select value={cardLot} onChange={(e) => setCardLot(e.target.value)} style={filterStyle}>
            <option value="All">All Parking Lots</option>
            <option value="Airport Lot A">Airport Lot A</option>
            <option value="Lot B - DHA">Lot B - DHA</option>
          </select>
          <select
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              if (e.target.value === 'Custom') setShowCalendar(true);
              else setShowCalendar(false);
            }}
            style={filterStyle}
          >
            <option value="Monthly">Monthly</option>
            <option value="Custom">Custom Range</option>
          </select>
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {statCards.map((card, i) => (
            <div key={i} style={{
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
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '0.95rem', color: '#6B7280' }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>{card.value}</p>
              </div>
              <div style={{
                background: card.bg,
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {card.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>Weekly Lot Payout</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Search by lot or vendor"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={filterStyle}
              />
              <select value={airportFilter} onChange={(e) => setAirportFilter(e.target.value)} style={filterStyle}>
                <option value="All">All Airports</option>
                <option value="LHE">LHE</option>
                <option value="ISB">ISB</option>
                <option value="KHI">KHI</option>
              </select>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={filterStyle}>
                <option value="All">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Parking Lot</th>
                <th style={thStyle}>Vendor</th>
                <th style={thStyle}>Week</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.lot}</td>
                  <td style={tdStyle}>{row.vendor}</td>
                  <td style={tdStyle}>{row.week}</td>
                  <td style={tdStyle}>{row.amount}</td>
                  <td style={tdStyle}>{row.status}</td>
                  <td style={tdStyle}>
                    {row.status === 'Unpaid' ? (
                      <button style={actionButton('#10B981')}>Mark as Paid</button>
                    ) : (
                      <button style={actionButton('#2563EB')} onClick={() => handleViewReceipt(row)}>View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Custom Range Calendar Popup */}
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
              onChange={item => setCustomRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={customRange}
              rangeColors={['#3B82F6']}
            />
            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <button onClick={() => setShowCalendar(false)} style={actionButton('#3B82F6')}>Apply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const filterStyle = {
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  minWidth: '200px'
};

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  fontWeight: '600'
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0'
};

const actionButton = (bg) => ({
  background: bg,
  color: '#fff',
  padding: '6px 10px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.85rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
});

export default RevenueManagement;
