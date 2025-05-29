import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';

const UserDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="User Detail" />

        <div style={{ background: '#fff', borderRadius: '10px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Profile Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div><strong>Name:</strong> Sarah Ahmed</div>
            <div><strong>Email:</strong> sarah@example.com</div>
            <div><strong>Role:</strong> Customer</div>
            <div><strong>Status:</strong> Active</div>
            <div><strong>Registered:</strong> 05 Mar 2025</div>
            <div><strong>Last Login:</strong> 20 May 2025</div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Security Actions</h3>
            <button style={{ marginRight: '1rem', padding: '8px 14px', border: 'none', background: '#2563EB', color: '#fff', borderRadius: '6px' }}>Reset Password</button>
            <button style={{ padding: '8px 14px', border: 'none', background: '#DC2626', color: '#fff', borderRadius: '6px' }}>Disable Account</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDetail;
