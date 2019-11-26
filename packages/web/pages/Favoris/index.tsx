import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import FavorisContainer from '../../containers/Favoris';

const FavorisScreen: React.FC = () => (
  <>
    <Head>
      <title>Favoris</title>
    </Head>
    <Layout>
      <h1>My favoris</h1>
      <FavorisContainer />
    </Layout>
  </>
);

export default FavorisScreen;
