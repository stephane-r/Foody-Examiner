import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Upload from '../../components/Forms/Upload';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Layout>
      <h1>Home</h1>
      <Upload />
    </Layout>
  </>
);

export default Home;
