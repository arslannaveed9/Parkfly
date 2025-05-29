import React from 'react';

const FilterBar = ({
  searchPlaceholder = "Search...",
  onSearchChange,
  filters = [],
}) => {
  const styles = {
    container: {
      marginBottom: '1.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    input: {
      padding: '8px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      minWidth: '200px',
    },
    select: {
      padding: '8px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      minWidth: '200px',
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder={searchPlaceholder}
        onChange={onSearchChange}
        style={styles.input}
      />
      {filters.map((filter, index) => (
        <select key={index} style={styles.select} onChange={filter.onChange}>
          <option value="">{filter.label}</option>
          {filter.options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default FilterBar;
