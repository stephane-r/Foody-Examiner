import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import FileList from '../../components/File/List';

const MyUploads: React.FC = () => (
  <>
    <Head>
      <title>My Uploads</title>
    </Head>
    <Layout>
      <h1>My uploads</h1>
      <FileList />
    </Layout>
  </>
);

export default MyUploads;
