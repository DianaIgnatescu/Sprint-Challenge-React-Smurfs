import React from 'react';
import PropTypes from 'prop-types';

const Smurf = props => {
  const { name, height, age, id, banSmurf } = props;
  return (
    <div className="Smurf">
      <div className="smurf-name">
        <h3>{name}</h3>
      </div>
      <div className="smurf-details">
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </div>
      <div className="requests">
        <button className="delete" onClick={(e) => {banSmurf(e, id)}}>Ban from Village</button>
      </div>
    </div>
  );
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  banSmurf: PropTypes.func.isRequired,
};

export default Smurf;
