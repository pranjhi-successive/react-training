import React, { useState, useEffect } from 'react';

const Task2=() =>{
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok && Math.random()<0.1) {

          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRetry = () => {
    fetchData();
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error ? (
        <div>
          <p>Error: {error.message}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      ) : (
        <button onClick={fetchData}>Fetch Data</button>
      )}
      {data && <h6>Data: {JSON.stringify(data)}</h6>}
    </div>
  );
}

export default Task2;
