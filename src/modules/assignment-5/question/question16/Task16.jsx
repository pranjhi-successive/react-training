import React from "react";
import withDataFetching from "./withDataFetching";
import DisplayData from "./DisplayData";

const Task16 = () => {
  const DataFetch = withDataFetching(DisplayData);

  return (
    <div>
      <DataFetch />
    </div>
  );
};

export default Task16;