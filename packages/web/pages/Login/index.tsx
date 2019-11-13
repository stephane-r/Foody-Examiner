import React from 'react';
import Head from 'next/head';
import App from '../../components/App';
import LoginForm from './form';

const LoginScreen: React.FC = () => (
  <>
    <Head>
      <title>Connexion</title>
    </Head>
    <App>
      <h1>Connexion</h1>
      <LoginForm />
    </App>
  </>
);

export default LoginScreen;
