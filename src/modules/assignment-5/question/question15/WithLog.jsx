import React, { useEffect, useState } from "react";

const withLogger = (WrappedComponent) => {
  return () => {
    const [isMounted, setMounted] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      if (isMounted) {
        console.log("Component Mounted!");
      }

      return () => {
        setMounted(false);
        console.log("Component Unmounted!");
      };
    }, [isMounted]);

    useEffect(() => {
      console.log("Component Updated!");
    }, [data]);

    return <WrappedComponent data={data} setData={setData} />;
  };
};

export default withLogger;