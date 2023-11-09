import React from "react";

import { useState } from "react";
const FetchUrl = () => {
  const apiurl = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(apiurl);
    const data = await response.json();
    setUsers(data.map((elem) => elem.name));
  };
  return (
    <>
      <button onClick={fetchData}>FETCH </button>
      {users.length > 0 && (
        <div>
          <h2>Users</h2>
          {users.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </>
  );
};
export default FetchUrl;
