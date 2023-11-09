import React, { useState } from 'react';

const SearchFilter=()=> {
  const [searchQuery, setSearchQuery] = useState('');
  const [items] = useState([
    'Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Mango', 'Orange', 'Peach', 'Pear'
  ]);

  const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for items"
        value={searchQuery}
        onChange={handleInputChange}
      />
      
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      
    </div>
  );
}

export default SearchFilter;
