import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import PantriesContainer from '../../containers/Pantries';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Layout>
      <h1>My pantries</h1>
      <PantriesContainer />
    </Layout>
  </>
);

export default Home;
