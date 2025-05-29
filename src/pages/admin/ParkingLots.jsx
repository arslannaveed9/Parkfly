import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import ActionButtons from '../../components/ActionButtons';

const ParkingLots = () => {
  const navigate = useNavigate();

  const lots = [
    {
      id: 'lot001',
      name: 'Airport Lot A',
      vendor: 'Ali Khan',
      airport: 'LHE',
      pricing: '24-Hour',
      payment: 'Online',
      status: 'Active',
    },
    {
      id: 'lot002',
      name: 'Lot B - DHA',
      vendor: 'Sarah Ahmed',
      airport: 'ISB',
      pricing: 'Day-End',
      payment: 'On-site',
      status: 'Active',
    },
  ];

  const handleViewClick = (lot) => {
    navigate(`/admin/lots/${lot.id}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
        <PageHeader title="Parking Lot Management" />

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <input type="text" placeholder="Search by lot name or vendor" style={inputStyle} />
            <select style={inputStyle}>
              <option value="">Payment Type</option>
              <option value="online">Online</option>
              <option value="onsite">On-site</option>
            </select>
            <select style={inputStyle}>
              <option value="">Pricing Model</option>
              <option value="24h">24-Hour</option>
              <option value="dayend">Day-End</option>
            </select>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Lot Name</th>
                <th style={thStyle}>Vendor</th>
                <th style={thStyle}>Airport</th>
                <th style={thStyle}>Pricing Model</th>
                <th style={thStyle}>Payment Type</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lots.map((lot) => (
                <tr key={lot.id}>
                  <td style={tdStyle}>{lot.name}</td>
                  <td style={tdStyle}>{lot.vendor}</td>
                  <td style={tdStyle}>{lot.airport}</td>
                  <td style={tdStyle}>{lot.pricing}</td>
                  <td style={tdStyle}>{lot.payment}</td>
                  <td style={tdStyle}>{lot.status}</td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <ActionButtons
                        actions={[
                          {
                            label: 'View',
                            color: '#4B5563',
                            onClick: () => handleViewClick(lot),
                          },
                          {
                            label: 'Edit',
                            color: '#0EA5E9',
                            onClick: () => alert(`Edit ${lot.name}`),
                          },
                          {
                            label: 'Disable',
                            color: '#DC2626',
                            onClick: () => alert(`Disable ${lot.name}`),
                          },
                        ]}
                        rowData={lot}
                      />
                    </div>
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

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  fontWeight: '600',
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'top',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  minWidth: '200px',
};

export default ParkingLots;
