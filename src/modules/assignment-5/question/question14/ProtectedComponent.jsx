import React from 'react';
import withAuth from './WithAuth';

const ProtectedComponent = () => {
  return <div>This is a protected component.</div>;
};

export default withAuth(ProtectedComponent);
