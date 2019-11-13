import React from 'react';
import Head from 'next/head';
import App from '../../components/App';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <App>
      <h1>Hello world !</h1>
    </App>
  </>
);

export default Home;
