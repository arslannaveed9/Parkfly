import React from 'react';

const ActionButtons = ({ actions = [], rowData }) => {
  const styles = {
    button: {
      marginRight: '6px',
      padding: '6px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      color: '#fff',
      fontSize: '0.85rem'
    }
  };

  return (
    <div>
      {actions.map((action, index) => (
        <button
          key={index}
          style={{
            ...styles.button,
            backgroundColor: action.color || '#2563EB',
          }}
          onClick={() => action.onClick(rowData)}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
