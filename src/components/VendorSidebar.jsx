import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  CalendarCheck,
  MapPin,
  Wallet,
  Users,
  Settings
} from 'lucide-react';

const VendorSidebar = () => {
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
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'background 0.3s',
    },
    activeItem: {
      background: '#2563EB',
    },
    icon: {
      width: '18px',
      height: '18px',
    },
  };

  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/vendor/dashboard', icon: <LayoutDashboard style={styles.icon} /> },
    { name: 'Bookings', path: '/vendor/bookings', icon: <CalendarCheck style={styles.icon} /> },
    { name: 'Parking Lots', path: '/vendor/lots', icon: <MapPin style={styles.icon} /> },
    { name: 'Revenue & Payouts', path: '/vendor/revenue', icon: <Wallet style={styles.icon} /> },
    { name: 'Staff', path: '/vendor/staff', icon: <Users style={styles.icon} /> },
    { name: 'Settings', path: '/vendor/settings', icon: <Settings style={styles.icon} /> },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.heading}>Vendor Panel</h2>
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
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorSidebar;
