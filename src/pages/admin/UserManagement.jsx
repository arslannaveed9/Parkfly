import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import ActionButtons from '../../components/ActionButtons';

const UserManagement = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
        <PageHeader title="User Management" />

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div className="filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <input type="text" placeholder="Search by name or email" style={inputStyle} />
            <select style={inputStyle}>
              <option value="">Filter by Role</option>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
            <select style={inputStyle}>
              <option value="">Filter by Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Registered</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Ali Khan</td>
                <td style={tdStyle}>ali@example.com</td>
                <td style={tdStyle}>Vendor</td>
                <td style={tdStyle}>Active</td>
                <td style={tdStyle}>22 Jan 2025</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <ActionButtons
                      actions={[
                        {
                          label: 'View',
                          color: '#4B5563',
                          onClick: () => console.log('View Ali')
                        },
                        {
                          label: 'Disable',
                          color: '#DC2626',
                          onClick: () => console.log('Disable Ali')
                        },
                        {
                          label: 'Reset Password',
                          color: '#0EA5E9',
                          onClick: () => console.log('Reset Ali')
                        }
                      ]}
                      rowData={{ name: 'Ali Khan' }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Sarah Ahmed</td>
                <td style={tdStyle}>sarah@example.com</td>
                <td style={tdStyle}>Customer</td>
                <td style={tdStyle}>Active</td>
                <td style={tdStyle}>05 Mar 2025</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <ActionButtons
                      actions={[
                        {
                          label: 'View',
                          color: '#4B5563',
                          onClick: () => console.log('View Sarah')
                        },
                        {
                          label: 'Disable',
                          color: '#DC2626',
                          onClick: () => console.log('Disable Sarah')
                        },
                        {
                          label: 'Reset Password',
                          color: '#0EA5E9',
                          onClick: () => console.log('Reset Sarah')
                        }
                      ]}
                      rowData={{ name: 'Sarah Ahmed' }}
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

export default UserManagement;
