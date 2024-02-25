// ImageRenderer.js
import data from './db.json';
import React from 'react';

const ImageRenderer = ({ value }) => {
    console.log(value);
  return <img src={`${value}`} alt="Image" style={{ width: '50px', height: '50px' }} />;
};

export default ImageRenderer;
