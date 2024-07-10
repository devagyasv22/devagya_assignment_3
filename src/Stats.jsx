import React from 'react';
import './Stats.css';

const Stats = ({ stats }) => {
  return (
    <ul className="superhero-stats">
      {Object.keys(stats).map(key => (
        <li key={key}>
          {key}: {stats[key]}
        </li>
      ))}
    </ul>
  );
};

export default Stats;
