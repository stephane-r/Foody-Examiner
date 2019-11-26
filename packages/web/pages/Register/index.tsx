import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import RegiterForm from './form';

const RegisterScreen: React.FC = () => (
  <>
    <Head>
      <title>Register</title>
    </Head>
    <Layout>
      <h1>Register</h1>
      <RegiterForm />
    </Layout>
  </>
);

export default RegisterScreen;
