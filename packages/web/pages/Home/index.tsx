import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import App from '../../components/App';
import Upload from '../../components/Forms/Upload';

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
      <Upload />
    </App>
  </>
);

export default Home;
