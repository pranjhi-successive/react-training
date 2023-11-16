import React from "react";

const UserProfile = (props) => {
  const { name, email, phoneNo } = props;

  return (
    <>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Phone Number: {phoneNo}</div>
    </>
  );
};

export default UserProfile;