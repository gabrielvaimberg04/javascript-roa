import React from 'react';
import NavBar from './NavBar';
import BandCard from './BandCard';

const bandsData = [
  { id: 1, name: 'The Rolling Stones', genre: 'Rock' },
  { id: 2, name: 'Led Zeppelin', genre: 'Rock' },
  { id: 3, name: 'Queen', genre: 'Rock' },
  // Agrega más bandas aquí
];

const RockBands = () => {
  return (
    <div>
      <NavBar />
      <h1>Bandas de Rock</h1>
      <div className="band-list">
        {bandsData.map(band => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </div>
  );
};

export default RockBands;
