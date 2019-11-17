import React, { useState } from 'react';
import Head from 'next/head';
import App from '../../components/App';
import RegiterForm from './form';

const RegisterScreen: React.FC = () => (
  <>
    <Head>
      <title>Register</title>
    </Head>
    <App>
      <h1>Register</h1>
      <RegiterForm />
    </App>
  </>
);

export default RegisterScreen;
