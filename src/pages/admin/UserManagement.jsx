import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import ActionButtons from '../../components/ActionButtons';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const users = [
    { id: 'V123', name: 'Ali Khan', email: 'ali@example.com', role: 'Vendor', status: 'Active', joined: '22 Jan 2025' },
    { id: 'U123', name: 'Sarah Ahmed', email: 'sarah@example.com', role: 'Customer', status: 'Active', joined: '05 Mar 2025' }
  ];

  const filteredUsers = users.filter(user =>
    (user.name.toLowerCase().includes(search.toLowerCase()) ||
     user.email.toLowerCase().includes(search.toLowerCase())) &&
    (roleFilter ? user.role === roleFilter : true) &&
    (statusFilter ? user.status === statusFilter : true)
  );

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
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={inputStyle}
            />
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} style={inputStyle}>
              <option value="">Filter by Role</option>
              <option value="Customer">Customer</option>
              <option value="Vendor">Vendor</option>
              <option value="Admin">Admin</option>
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={inputStyle}>
              <option value="">Filter by Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

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
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>{user.role}</td>
                  <td style={tdStyle}>{user.status}</td>
                  <td style={tdStyle}>{user.joined}</td>
                  <td style={tdStyle}>
                    <ActionButtons
                      actions={[
                        { label: 'View', color: '#4B5563', onClick: () => handleView(user.role, user.id) },
                        { label: 'Disable', color: '#DC2626', onClick: () => console.log(`Disable ${user.name}`) },
                        { label: 'Reset Password', color: '#0EA5E9', onClick: () => console.log(`Reset ${user.name}`) }
                      ]}
                      rowData={{}}
                    />
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
  fontWeight: '600'
};

const tdStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #E2E8F0',
  verticalAlign: 'middle'
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  minWidth: '180px'
};

export default UserManagement;