import React, { useState } from 'react';
import { View } from 'react-native';
import Head from 'next/head';
import Layout from '../../components/Layout';
import LoginFormContainer from '../../containers/LoginForm';

const LoginScreen: React.FC = () => {
  const [useAcount, setUseAcount] = useState(null);

  return (
    <>
      <Head>
        <title>Connexion</title>
      </Head>
      <Layout>
        <h1>Connexion</h1>
        <View>
          <button type="button" onClick={(): Function => setUseAcount(true)}>
            Use account
          </button>
          <button type="button" onClick={(): Function => setUseAcount(false)}>
            Continue without acount
          </button>
        </View>
        {useAcount && <LoginFormContainer />}
      </Layout>
    </>
  );
};

export default LoginScreen;
