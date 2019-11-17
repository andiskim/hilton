
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Components
// import Home from '../Home/Home';
import RootNavigator from '../../../navigators';

// Instantiate required constructor fields
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(
  {
   uri: 'http://your.graphql.url/graphql'
  })
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigator />
    </ApolloProvider>
  );
};

export default App;