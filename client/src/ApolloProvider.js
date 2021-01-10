import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';
import App from './App';

//Apollo client setup
// const httpLink = createHttpLink({
//   uri: 'http://localhost:7000/graphql',
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
//   onError: ({ networkError, graphQLErrors }) => {
//     console.log('graphQLErrors', graphQLErrors);
//     console.log('networkError', networkError);
//   },
// });

const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
