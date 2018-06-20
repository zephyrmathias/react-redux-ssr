import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <div>Header</div>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/post">Post</NavLink>
    </div>
  </div>
);

export default Header;
