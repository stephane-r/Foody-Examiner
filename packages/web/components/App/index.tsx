import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ProfilContainer from '../../containers/Profil';
import apolloClient from '../../graphql';

const App: React.FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <ProfilContainer />
    {children}
  </ApolloProvider>
);

export default App;
