import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import StatCard from '../../components/StatCard';
import ActionButtons from '../../components/ActionButtons';

const Payouts = () => {
  const navigate = useNavigate();

  const handleMarkPaid = (row) => {
    alert(`Marking ${row.vendor}'s payout as paid`);
  };

  const handleViewReceipt = (row) => {
    navigate(`/admin/payouts/${row.id}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '1rem 2rem 2rem 2rem', width: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Payout & Commission</h1>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <StatCard title="Total Revenue (This Month)" value="PKR 1,540,000" />
          <StatCard title="Platform Share" value="PKR 340,000" />
          <StatCard title="Vendors Share" value="PKR 1,200,000" />
          <StatCard title="Tax Collected" value="PKR 50,000" />
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>Monthly Vendor Payouts</h2>
            <button style={{
              background: '#0EA5E9',
              color: 'white',
              padding: '6px 10px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>Export CSV</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Vendor</th>
                <th style={thStyle}>Month</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Ali Khan</td>
                <td style={tdStyle}>May 2025</td>
                <td style={tdStyle}>PKR 450,000</td>
                <td style={tdStyle}>Pending</td>
                <td style={tdStyle}>
                  <ActionButtons
                    actions={[
                      {
                        label: 'Mark as Paid',
                        color: '#10B981',
                        onClick: () => handleMarkPaid({ id: 'P1101', vendor: 'Ali Khan' })
                      }
                    ]}
                    rowData={{ id: 'P1101' }}
                  />
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Sarah Ahmed</td>
                <td style={tdStyle}>May 2025</td>
                <td style={tdStyle}>PKR 300,000</td>
                <td style={tdStyle}>Paid</td>
                <td style={tdStyle}>
                  <ActionButtons
                    actions={[
                      {
                        label: 'View',
                        color: '#2563EB',
                        onClick: () => handleViewReceipt({ id: 'P1102' })
                      }
                    ]}
                    rowData={{ id: 'P1102' }}
                  />
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
  borderBottom: '1px solid #E2E8F0'
};

export default Payouts;
