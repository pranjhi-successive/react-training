import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task6 = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get(`https://restcountries.com/v3.1/all?limit=10&page=${page}`);
      const newCountries = response.data;
      setCountries((prevCountries) => [...prevCountries, ...newCountries]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const retry = () => {
    setError(null);
    fetchCountries();
  };

  return (
    <div>
      <h1>Countries Information</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>
          <p>{error}</p>
          <button onClick={retry}>Retry</button>
        </div>
      ) : (
        <div>
          <ul>
            {countries.map((country, index) => (
              <li key={index}>
                <strong>{country.name.common}</strong> - {country.region}
              </li>
            )).slice(0, page * 10)}
          </ul>
          <button onClick={loadMore}>Fetch More</button>
        </div>
      )}
    </div>
  );
};

export default Task6;
