import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect } from "react";

const UserDataComponent = (props) => {
  const { data, setData } = props;

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("fetchData called!");
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(
          response.data.map((user, index) => ({
            id: index + 1,
            name: user.name,
            username: user.username,
            email: user.email,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setData]);

  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Name", width: 400 },
    { field: "username", headerName: "username", width: 400 },
    { field: "email", headerName: "Email", width: 400 },
  ];

  return (
    <div>
      <DataGrid
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
};

export default UserDataComponent;