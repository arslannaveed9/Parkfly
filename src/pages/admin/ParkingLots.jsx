import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import ActionButtons from '../../components/ActionButtons';

const ParkingLots = () => {
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
              <tr>
                <td style={tdStyle}>Airport Lot A</td>
                <td style={tdStyle}>Ali Khan</td>
                <td style={tdStyle}>LHE</td>
                <td style={tdStyle}>24-Hour</td>
                <td style={tdStyle}>Online</td>
                <td style={tdStyle}>Active</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <ActionButtons
                      actions={[
                        { label: 'View', color: '#4B5563', onClick: () => console.log('View Airport Lot A') },
                        { label: 'Edit', color: '#0EA5E9', onClick: () => console.log('Edit Airport Lot A') },
                        { label: 'Disable', color: '#DC2626', onClick: () => console.log('Disable Airport Lot A') },
                      ]}
                      rowData={{ name: 'Airport Lot A' }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Lot B - DHA</td>
                <td style={tdStyle}>Sarah Ahmed</td>
                <td style={tdStyle}>ISB</td>
                <td style={tdStyle}>Day-End</td>
                <td style={tdStyle}>On-site</td>
                <td style={tdStyle}>Active</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <ActionButtons
                      actions={[
                        { label: 'View', color: '#4B5563', onClick: () => console.log('View Lot B - DHA') },
                        { label: 'Edit', color: '#0EA5E9', onClick: () => console.log('Edit Lot B - DHA') },
                        { label: 'Disable', color: '#DC2626', onClick: () => console.log('Disable Lot B - DHA') },
                      ]}
                      rowData={{ name: 'Lot B - DHA' }}
                    />
                  </div>
                </td>
              </tr>
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
  fontWeight: '600'
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'top'
};

const inputStyle = {
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  minWidth: '200px'
};

export default ParkingLots;
