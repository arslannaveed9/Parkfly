import React from 'react';

const StatCard = ({ title, value }) => {
  const styles = {
    card: {
      background: '#FFFFFF',
      borderRadius: '10px',
      padding: '1.5rem',
      flex: '1 1 250px',
      minWidth: '220px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
    },
    title: {
      margin: '0 0 0.5rem 0',
      fontSize: '1rem',
      color: '#1F2937',
    },
    value: {
      margin: 0,
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1F2937',
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.value}>{value}</p>
    </div>
  );
};

export default StatCard;
