import React, { useState } from 'react';

const withAuth = (WrappedComponent) => {
  return function WithAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Hello ,You are not authenticated. Please log in again.</p>;
    }
  };
};

export default withAuth;
