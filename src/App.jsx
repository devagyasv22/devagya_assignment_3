import React, { useState } from 'react';
import axios from 'axios';
import Image from './Image';
import Stats from './Stats';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [superhero, setSuperhero] = useState(null);
  const token = '16fc575a2fd01ea1c134cb8f1a2765be';

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://cors-proxy-superhero-api.onrender.com/${token}/getByName/${name}`);
      // console.log (response.data)
      setSuperhero(response.data.results[0]);
    } 
    catch (error) {
      console.error('Error fetching superhero data', error);
    }
  };
  const handleRandomClick = async () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    try {
      const response = await axios.get(`https://cors-proxy-superhero-api.onrender.com/${token}/getById/${randomId}`);
      // console.log(response.data);
      setSuperhero(response.data);
    } 
    catch (error) {
      console.error('Error fetching random superhero data', error);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleClick} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter superhero name"
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={handleRandomClick} className="random-button">
        Random Superhero generator
      </button>
      {superhero && (
        <>
          <Image url={superhero.image.url} />
          <Stats stats={superhero.powerstats} />
        </>
      )}
    </div>
  );
};

export default App;