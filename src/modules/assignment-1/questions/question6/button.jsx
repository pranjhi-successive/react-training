const Button = ({ text, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="custom-button" style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
