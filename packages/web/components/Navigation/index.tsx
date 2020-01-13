/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';

const { Link } = require('../../routes');

const Navigation: React.FC = () => {
  // @ts-ignore
  const isConnected = useSelector(state => state.app.token);

  return (
    <nav>
      <Link route="Home">
        <a>Home</a>
      </Link>
      {isConnected && (
        <Link route="Pantries">
          <a>My pantry</a>
        </Link>
      )}
      {isConnected && (
        <Link route="Favoris">
          <a>Favoris</a>
        </Link>
      )}
      {isConnected && (
        <Link route="MyUploads">
          <a>My uploads</a>
        </Link>
      )}
      <Link route="Login">
        <a>Login</a>
      </Link>
      <Link route="Register">
        <a>Register</a>
      </Link>
    </nav>
  );
};

export default Navigation;
