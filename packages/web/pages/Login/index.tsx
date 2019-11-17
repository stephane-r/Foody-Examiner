import React, { useState } from 'react';
import Head from 'next/head';
import App from '../../components/App';
import LoginForm from './form';

const LoginScreen: React.FC = () => {
  const [useAcount, setUseAcount] = useState(null);

  return (
    <>
      <Head>
        <title>Connexion</title>
      </Head>
      <App>
        <h1>Connexion</h1>
        <button type="button" onClick={(): Function => setUseAcount(true)}>
          Use account
        </button>
        <button type="button" onClick={(): Function => setUseAcount(false)}>
          Continue without acount
        </button>
        {useAcount && <LoginForm />}
      </App>
    </>
  );
};

export default LoginScreen;
