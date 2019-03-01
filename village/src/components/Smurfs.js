import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

class Smurfs extends Component {
  componentDidMount() {
    const { getSmurfs } = this.props;
    getSmurfs();
  }

  render() {
    const { smurfs, banSmurf } = this.props;
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={`${smurf.id}-${smurf.name}`}
                banSmurf={banSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  })).isRequired,
  getSmurfs: PropTypes.func.isRequired,
  banSmurf: PropTypes.func.isRequired,
};

export default Smurfs;
