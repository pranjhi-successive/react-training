import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const DisplayData = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <DataGrid
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  );
};

export default DisplayData;