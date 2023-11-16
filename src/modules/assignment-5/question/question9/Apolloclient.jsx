import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'f41c3ad761msh0c4c94dbc7b0890p15e042jsn6d21eb7c4878',
    'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
  cache: new InMemoryCache(),
});

export default client;
