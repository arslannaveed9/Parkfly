import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: '240px',
      height: '100vh',
      background: '#1E3A8A',
      color: '#F9FAFB',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '2rem',
      fontWeight: 600,
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: '12px 16px',
      borderRadius: '6px',
      textDecoration: 'none',
      color: '#F9FAFB',
      display: 'block',
      transition: 'background 0.3s',
    },
    activeItem: {
      background: '#2563EB',
    },
  };

  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'User Management', path: '/admin/users' },
    { name: 'Parking Lots', path: '/admin/lots' },
    { name: 'Bookings', path: '/admin/bookings' },
    { name: 'Payouts', path: '/admin/payouts' },
    { name: 'Settings', path: '/admin/settings' },
    { name: 'Taxes & Charges', path: '/admin/settings/taxes' },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.heading}>Admin Panel</h2>
      <ul style={styles.list}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              style={{
                ...styles.listItem,
                ...(location.pathname === item.path ? styles.activeItem : {}),
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
