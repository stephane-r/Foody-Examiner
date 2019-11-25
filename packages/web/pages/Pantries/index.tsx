import React from 'react';
import Head from 'next/head';
import App from '../../components/App';
import PantriesContainer from '../../containers/Pantries';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <App>
      <h1>My pantries</h1>
      <PantriesContainer />
    </App>
  </>
);

export default Home;
