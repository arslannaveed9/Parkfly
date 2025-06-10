import React, { useState } from 'react';
import VendorSidebar from '../../components/VendorSidebar';
import PageHeader from '../../components/PageHeader';
import FilterBar from '../../components/FilterBar';
import ReusableTable from '../../components/ReusableTable';

const VendorStaff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const staffMembers = [
    {
      name: 'Ahmed Raza',
      email: 'ahmed@lotA.com',
      role: 'Manager',
      lot: 'Airport Lot A',
      status: 'Active',
    },
    {
      name: 'Zeeshan Ali',
      email: 'zeeshan@lotB.com',
      role: 'View-Only Staff',
      lot: 'Lot B - DHA',
      status: 'Inactive',
    },
    {
      name: 'Fatima Noor',
      email: 'fatima@lotC.com',
      role: 'Accountant',
      lot: 'Lot C - Gulberg',
      status: 'Active',
    },
  ];

  const filteredStaff = staffMembers.filter((member) => {
    const matchSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRole = !roleFilter || member.role === roleFilter;
    const matchStatus = !statusFilter || member.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  const tableHeaders = ['Name', 'Email', 'Role', 'Assigned Lot', 'Status', 'Actions'];

  const tableData = filteredStaff.map((member) => ({
    Name: member.name,
    Email: member.email,
    Role: member.role,
    'Assigned Lot': member.lot,
    Status: member.status,
    Actions: (
      <button style={buttonStyle} onClick={() => alert(`Editing ${member.name}`)}>
        Edit
      </button>
    ),
  }));

  return (
    <div style={{ display: 'flex' }}>
      <VendorSidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Staff Management" />

        <div style={sectionStyle}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
            />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              style={inputStyle}
            >
              <option value="">Filter by Role</option>
              <option value="Manager">Manager</option>
              <option value="View-Only Staff">View-Only Staff</option>
              <option value="Accountant">Accountant</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={inputStyle}
            >
              <option value="">Filter by Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <ReusableTable headers={tableHeaders} data={tableData} />
        </div>
      </div>
    </div>
  );
};

const sectionStyle = {
  background: '#fff',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  marginBottom: '2rem',
};

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  minWidth: '180px',
};

const buttonStyle = {
  padding: '6px 12px',
  background: '#2563EB',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.85rem',
};

export default VendorStaff;
