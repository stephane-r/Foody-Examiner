import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ProfilContainer from '../../containers/Profil';
import apolloClient from '../../graphql';
import Navigation from '../Navigation';

const App: React.FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <ProfilContainer />
    <Navigation />
    {children}
  </ApolloProvider>
);

export default App;
