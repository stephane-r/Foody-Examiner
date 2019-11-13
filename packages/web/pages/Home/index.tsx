import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import App from '../../components/App';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <App>
      <h1>Home</h1>
      <Link href="/connexion">
        <a>Login</a>
      </Link>
    </App>
  </>
);

export default Home;
