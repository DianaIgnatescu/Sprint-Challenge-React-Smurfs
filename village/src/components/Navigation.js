import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <NavLink to="/smurfs">Smurfs</NavLink>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;