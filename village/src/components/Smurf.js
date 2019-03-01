import React from 'react';
import PropTypes from 'prop-types';

const Smurf = props => {
  const { name, height, age } = props;
  return (
    <div className="Smurf">
      <div className="smurf-name">
        <h3>{name}</h3>
      </div>
      <div className="smurf-details">
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default Smurf;

