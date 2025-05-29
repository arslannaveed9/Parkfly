import React from 'react';

const StatCard = ({ title, value, icon, color = '#3B82F6', bg = '#DBEAFE' }) => {
  const styles = {
    card: {
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '1.5rem',
      flex: '1 1 250px',
      minWidth: '220px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'transform 0.2s ease',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '0.9rem',
      color: '#4B5563',
      marginBottom: '6px',
    },
    value: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#111827',
    },
    iconContainer: {
      backgroundColor: bg,
      borderRadius: '50%',
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconStyle: {
      color: color,
    }
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
    >
      <div style={styles.textSection}>
        <span style={styles.title}>{title}</span>
        <span style={styles.value}>{value}</span>
      </div>
      <div style={styles.iconContainer}>
        {React.cloneElement(icon, { size: 22, style: styles.iconStyle })}
      </div>
    </div>
  );
};

export default StatCard;
