import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
  return (
    <div>{ `${task.name} - ${task.status}` }</div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Task;
