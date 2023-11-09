import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'f41c3ad761msh0c4c94dbc7b0890p15e042jsn6d21eb7c4878',
    'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
    'Content-Type': 'application/json'
},
  cache: new InMemoryCache(),
});
const GET_COUNTRIES = gql`
  query MyQuery {
    countries {
      edges {
        node {
          capital
          currencyCodes
        }
      }
    }
  }
`;
const  CountryList=()=> {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries = data.countries.edges;

  return (
    <div>
      <h1>Country List</h1>
      
        {countries.map((country, index) => (
          <div key={index}>
            <p>Capital: {country.node.capital}</p>
            <h4>Currency Codes: {country.node.currencyCodes.join(', ')}</h4>
          </div>
        ))}
    
    </div>
  );
}

const Task8=()=> {
  return (
    <ApolloProvider client={client}>
      <div>
        <CountryList />
      </div>
    </ApolloProvider>
  );
}

export default Task8;
