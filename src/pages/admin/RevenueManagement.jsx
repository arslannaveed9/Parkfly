import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import { DollarSign, PieChart, Users, FileText } from 'lucide-react';

const RevenueManagement = () => {
  const navigate = useNavigate();

  // Filters for cards only
  const [cardLot, setCardLot] = useState('All');
  const [duration, setDuration] = useState('Monthly');
  const [customRange, setCustomRange] = useState({ from: '', to: '' });

  // Filters for table only
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
          <select value={duration} onChange={(e) => setDuration(e.target.value)} style={filterStyle}>
            <option value="Monthly">Monthly</option>
            <option value="Custom">Custom Range</option>
          </select>
          {duration === 'Custom' && (
            <>
              <input
                type="date"
                value={customRange.from}
                onChange={(e) => setCustomRange({ ...customRange, from: e.target.value })}
                style={filterStyle}
              />
              <input
                type="date"
                value={customRange.to}
                onChange={(e) => setCustomRange({ ...customRange, to: e.target.value })}
                style={filterStyle}
              />
            </>
          )}
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {statCards.map((card, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '1.5rem',
              flex: '1 1 250px',
              minWidth: '220px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#6B7280' }}>{card.title}</p>
                <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>{card.value}</p>
              </div>
              <div style={{ background: card.bg, padding: '10px', borderRadius: '50%' }}>{card.icon}</div>
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
      </div>
    </div>
  );
};

const filterStyle = {
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  minWidth: '180px'
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
