/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const { Link } = require('../../routes');

const Navigation: React.FC = () => (
  <nav>
    <Link route="Home">
      <a>Home</a>
    </Link>
    <Link route="Pantries">
      <a>My pantry</a>
    </Link>
    <Link route="Favoris">
      <a>Favoris</a>
    </Link>
    <Link route="Login">
      <a>Login</a>
    </Link>
    <Link route="Register">
      <a>Register</a>
    </Link>
  </nav>
);

export default Navigation;
