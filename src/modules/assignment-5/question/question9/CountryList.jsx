// CountryList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import ReactPaginate from 'react-paginate';
import { GET_COUNTRIES } from './GraphQL';

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

export default CountryList;
