import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import RegiterForm from '../../components/Forms/Register';

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
