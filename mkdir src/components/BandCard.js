import React from 'react';

const BandCard = ({ band }) => {
  return (
    <div className="band-card">
      <h2>{band.name}</h2>
      <p>Género: {band.genre}</p>
    </div>
  );
};

export default BandCard;
