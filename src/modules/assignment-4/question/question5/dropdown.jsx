import React, { useState } from 'react';

const SelectDropdown=()=> {
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Select an Option</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select your language</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="Javascript">Javascript 4</option>
      </select>
      {selectedOption && (
        <p>Selected option: {selectedOption}</p>
      )}
    </div>
  );
}

export default SelectDropdown;
