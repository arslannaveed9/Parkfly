import React from 'react';

const PageHeader = ({ title }) => {
  const styles = {
    container: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    heading: {
      margin: 0,
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#1F2937'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title}</h1>
    </div>
  );
};

export default PageHeader;

