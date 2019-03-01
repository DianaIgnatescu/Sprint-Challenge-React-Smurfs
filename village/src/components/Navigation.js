import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Smurfs</NavLink>
      <NavLink to="/smurf-form">Add Smurf</NavLink>
    </nav>
  );
};

export default Navigation;