const UserCard = ({ name, email, avatarURL }) => {
  return (
    <div className="usercard">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <img src={avatarURL} alt={name} />
    </div>
  );
};

export default UserCard;
