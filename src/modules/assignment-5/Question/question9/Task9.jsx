import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import ReactPaginate from 'react-paginate';

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
  query MyQuery($page: Int, $pageSize: Int) {
    countries(displayOptions: { page: $page, pageSize: $pageSize }) {
      totalCount
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
      }
    }
    currencies(after: "") {
      edges {
        cursor
        node {
          countryCodes
        }
      }
    }
    timeZone(id: "") {
      name
    }
    timeZones {
      pageInfo {
        hasPreviousPage
      }
    }
  }
`;

const CountryList=()=> {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = React.useState(0);

  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { page: currentPage + 1, pageSize },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null; 

  const countries = data.countries.edges;
  const totalCount = data.countries.totalCount;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cursor}>
            <p>Country Cursor: {country.cursor}</p>
          </li>
        ))}
      </ul>

      <ReactPaginate
        pageCount={Math.ceil(totalCount / pageSize)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

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
