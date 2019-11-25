import React from 'react';
import Head from 'next/head';
import App from '../../components/App';
import FavorisContainer from '../../containers/Favoris';

const FavorisScreen: React.FC = () => (
  <>
    <Head>
      <title>Favoris</title>
    </Head>
    <App>
      <h1>My favoris</h1>
      <FavorisContainer />
    </App>
  </>
);

export default FavorisScreen;
