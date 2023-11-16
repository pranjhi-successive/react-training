import React from 'react';
import {  ApolloProvider } from '@apollo/client';
import client from './Apolloclient';
import CountryList from './CountryList';

const Task9 = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <CountryList />
      </div>
    </ApolloProvider>
  );
}

export default Task9;
