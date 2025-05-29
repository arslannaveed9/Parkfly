import React from 'react';

const PageHeader = ({ title }) => {
  const styles = {
    container: {
      marginBottom: '2rem',
    },
    heading: {
      margin: 0,
      fontSize: '1.75rem',
      color: '#1F2937',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title}</h1>
    </div>
  );
};

export default PageHeader;
