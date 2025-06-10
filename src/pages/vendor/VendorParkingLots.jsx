import React, { useState } from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';
import ReusableTable from '../../components/ReusableTable';

const VendorParkingLots = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pricingFilter, setPricingFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [airportFilter, setAirportFilter] = useState('');
  const [minSlots, setMinSlots] = useState('');

  const lots = [
    {
      name: 'Airport Lot A',
      airport: 'LHE',
      pricing: '24-Hour',
      slots: 50,
      bookings: 78,
      revenue: 290000,
      status: 'Active',
    },
    {
      name: 'Lot B - DHA',
      airport: 'ISB',
      pricing: 'Day-End',
      slots: 40,
      bookings: 50,
      revenue: 140000,
      status: 'Active',
    },
    {
      name: 'Lot C - Gulberg',
      airport: 'LHE',
      pricing: '24-Hour',
      slots: 30,
      bookings: 33,
      revenue: 98000,
      status: 'Inactive',
    }
  ];

  const filteredLots = lots.filter((lot) => {
    const matchesSearch =
      lot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lot.airport.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPricing = !pricingFilter || lot.pricing === pricingFilter;
    const matchesStatus = !statusFilter || lot.status === statusFilter;
    const matchesAirport = !airportFilter || lot.airport === airportFilter;
    const matchesSlots = !minSlots || lot.slots >= parseInt(minSlots);
    return matchesSearch && matchesPricing && matchesStatus && matchesAirport && matchesSlots;
  });

  const tableHeaders = ['Lot Name', 'Airport', 'Pricing Model', 'Slots', 'Bookings', 'Revenue ($)', 'Status', 'Actions'];

  const tableData = filteredLots.map((lot) => ({
    'Lot Name': lot.name,
    'Airport': lot.airport,
    'Pricing Model': lot.pricing,
    'Slots': lot.slots,
    'Bookings': lot.bookings,
    'Revenue ($)': `$${(lot.revenue / 277).toFixed(0)}`,
    'Status': lot.status,
    'Actions': (
      <button
        style={actionButtonStyle}
        onClick={() => {
          localStorage.setItem('selectedLot', JSON.stringify(lot));
          window.location.href = '/vendor/lot-detail';
        }}
      >
        Manage
      </button>
    ),
  }));

  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="My Parking Lots" />

        <div style={sectionStyle}>
          {/* Filter Controls */}
          <div style={filterRowStyle}>
            <input
              type="text"
              placeholder="Search by lot or airport"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
            />

            <select value={pricingFilter} onChange={(e) => setPricingFilter(e.target.value)} style={inputStyle}>
              <option value="">Pricing Model</option>
              <option value="24-Hour">24-Hour</option>
              <option value="Day-End">Day-End</option>
            </select>

            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={inputStyle}>
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <select value={airportFilter} onChange={(e) => setAirportFilter(e.target.value)} style={inputStyle}>
              <option value="">Airport</option>
              <option value="LHE">LHE</option>
              <option value="ISB">ISB</option>
              <option value="KHI">KHI</option>
            </select>

            <input
              type="number"
              placeholder="Min Slots"
              value={minSlots}
              onChange={(e) => setMinSlots(e.target.value)}
              style={inputStyle}
            />
          </div>

          <ReusableTable headers={tableHeaders} data={tableData} />
        </div>
      </div>
    </div>
  );
};

// Styles
const sectionStyle = {
  background: '#fff',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  marginBottom: '2rem',
};

const filterRowStyle = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  marginBottom: '1rem',
};

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  minWidth: '180px',
};

const actionButtonStyle = {
  padding: '6px 12px',
  background: '#2563EB',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.85rem',
};

export default VendorParkingLots;
