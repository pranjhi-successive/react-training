import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const Task3=()=> {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        setData(response.data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {data && (
            <div>
              <h1>{`${data.name.first} ${data.name.last}`}</h1>
              <p>Email: {data.email}</p>
              <p>Location: {`${data.location.city}, ${data.location.country}`}</p>
              <img src={data.picture.large} alt="User" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Task3;
