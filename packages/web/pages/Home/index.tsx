import React from 'react';
import Head from 'next/head';
import RecognitionUploadContainer from '../../containers/RecognitionUpload';
import Layout from '../../components/Layout';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Layout>
      <h1>Home</h1>
      <RecognitionUploadContainer />
    </Layout>
  </>
);

export default Home;
