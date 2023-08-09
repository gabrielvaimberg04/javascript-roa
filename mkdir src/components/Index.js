import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás usando react-router para la navegación

const Index = () => {
  return (
    <div>
      <h2>Índice</h2>
      <ul>
        <li>
          <Link to="/rock-bands">Bandas de Rock</Link>
        </li>
        {/* Agrega más enlaces aquí */}
      </ul>
    </div>
  );
};

export default Index;
