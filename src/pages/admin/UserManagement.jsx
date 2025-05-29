import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import ActionButtons from '../../components/ActionButtons';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const navigate = useNavigate();

  const handleView = (role, id) => {
    if (role === 'Vendor') {
      navigate(`/admin/vendors/${id}`);
    } else {
      navigate(`/admin/users/${id}`);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%', boxSizing: 'border-box' }}>
        <PageHeader title="User Management" />
        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Joined</th>
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
                  <ActionButtons
                    actions={[
                      {
                        label: 'View',
                        color: '#4B5563',
                        onClick: () => handleView('Vendor', 'V123')
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
                    rowData={{}}
                  />
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Sarah Ahmed</td>
                <td style={tdStyle}>sarah@example.com</td>
                <td style={tdStyle}>Customer</td>
                <td style={tdStyle}>Active</td>
                <td style={tdStyle}>05 Mar 2025</td>
                <td style={tdStyle}>
                  <ActionButtons
                    actions={[
                      {
                        label: 'View',
                        color: '#4B5563',
                        onClick: () => handleView('Customer', 'U123')
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
                    rowData={{}}
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
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'middle'
};

export default UserManagement;
