import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/mon-garde-manger">
      <a>My pantry</a>
    </Link>
    <Link href="/mes-favoris">
      <a>My favoris</a>
    </Link>
    <Link href="/connexion">
      <a>Login</a>
    </Link>
    <Link href="/inscription">
      <a>Register</a>
    </Link>
  </nav>
);

export default Navigation;
