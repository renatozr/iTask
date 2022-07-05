import React from 'react';
import PropTypes from 'prop-types';

function SortBySelect({ sortBy, setSortBy }) {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sortBySelect">
        Ordenar por:
        <select id="sortBySelect" value={sortBy} onChange={handleChange}>
          <option value="date">Data de criação</option>
          <option value="alphabetic">Ordem Alfabética</option>
          <option value="status">Status</option>
        </select>
      </label>
    </div>
  );
}

SortBySelect.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default SortBySelect;
