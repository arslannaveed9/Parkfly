import React from 'react';

const ReusableTable = ({ headers = [], data = [], actionButtons = [] }) => {
  const styles = {
    tableContainer: {
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      padding: '12px',
      borderBottom: '1px solid #E2E8F0',
      backgroundColor: '#F8FAFC',
      color: '#1F2937',
      fontWeight: 'bold',
    },
    td: {
      textAlign: 'left',
      padding: '12px',
      borderBottom: '1px solid #E2E8F0',
      color: '#1F2937',
    },
    actionButton: {
      marginRight: '6px',
      padding: '6px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#2563EB',
      color: '#fff',
    },
  };

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            {headers.map((head, index) => (
              <th key={index} style={styles.th}>{head}</th>
            ))}
            {actionButtons.length > 0 && <th style={styles.th}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((key, colIndex) => (
                <td key={colIndex} style={styles.td}>{row[key]}</td>
              ))}
              {actionButtons.length > 0 && (
                <td style={styles.td}>
                  {actionButtons.map((btn, btnIndex) => (
                    <button
                      key={btnIndex}
                      onClick={() => btn.onClick(row)}
                      style={{
                        ...styles.actionButton,
                        backgroundColor: btn.color || '#2563EB',
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
