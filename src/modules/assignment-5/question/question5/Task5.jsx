import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task51 = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://restcountries.com/v3.1/all?limit=10&page=${page}`);
        const newCountries = response.data;
        setCountries((prevCountries) => [...prevCountries, ...newCountries]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Countries Information</h1>
      {isLoading ? (
        <p>Loading...</p>
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

export default Task51;
