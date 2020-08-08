import { ApolloClient, InMemoryCache } from '@apollo/client';

// const PROD = process.env.NODE_ENV === 'production';
// const uri = PROD ? '/graphql' : 'http://localhost:3000/graphql';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

export default client;
