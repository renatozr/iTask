import React from 'react';
import PropTypes from 'prop-types';

function SortingSelect({ sortType, setSortType }) {
  const handleChange = (event) => {
    setSortType(event.target.value);
  };

  return (
    <div>
      <select value={sortType} onChange={handleChange}>
        <option value="data">Data de criação</option>
        <option value="alfabetica">Ordem Alfabética</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}

SortingSelect.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default SortingSelect;
