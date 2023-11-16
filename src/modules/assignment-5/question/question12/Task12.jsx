import React from 'react';

const Button=({ style, onClick, children })=> {
  const buttonStyles = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    ...style,
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

const  Task12=()=> {
  const handlePrimaryClick = () => {
    alert('Primary button clicked!');
  };

  const handleSecondaryClick = () => {
    alert('Secondary button clicked!');
  };

  const handleDangerClick = () => {
    alert('Danger button clicked!');
  };

  const primaryButtonStyles = {
    backgroundColor: 'blue',
    color: 'white',
  };

  const secondaryButtonStyles = {
    backgroundColor: 'gray',
    color: 'white',
  };

  const dangerButtonStyles = {
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <>
      <h1>Sample Application</h1>
      <Button style={primaryButtonStyles} onClick={handlePrimaryClick}>
        Primary Button
      </Button>
      <Button style={secondaryButtonStyles} onClick={handleSecondaryClick}>
        Secondary Button
      </Button>
      <Button style={dangerButtonStyles} onClick={handleDangerClick}>
        Danger Button
      </Button>
    </>
  );
}

export default Task12;
