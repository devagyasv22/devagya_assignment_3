import React from 'react';
import './Image.css';

const Image = ({ url }) => {
  return <img src={url} alt="Superhero" className="superhero-image"/>;
};

export default Image;
