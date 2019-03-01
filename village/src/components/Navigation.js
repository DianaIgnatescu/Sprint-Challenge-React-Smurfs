import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Smurfs</Link>
      <Link to="/smurf-form">Add Smurf</Link>
    </nav>
  );
};

export default Navigation;