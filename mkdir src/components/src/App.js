import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Contenido de la aplicación</h1>
    </div>
  );
}

export default App;

import React from 'react';
import RockBands from './components/RockBands';
import './styles.css';

function App() {
  return (
    <div className="app">
      <RockBands />
    </div>
  );
}


