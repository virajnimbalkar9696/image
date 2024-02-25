// ArrowRenderer.js

import React, { useState } from 'react';

const ArrowRenderer = ({ value, node, api }) => {
  const [showDropdown, setShowDropdown] = useState(true);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
    console.log("dropdown");
    api.startEditingCell({
      rowIndex: node.rowIndex,
      colKey: 'Gender', // Replace 'columnName' with the actual column field
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleClick}>
      {value} {showDropdown && ' ▼'}
    </div>
  );
};

export default ArrowRenderer;
