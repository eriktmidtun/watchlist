import React from 'react';
import './App.css';
import Registrering from './Components/Registrering/Registrering';
import Navigeringsbar from './Components/Navigeringsbar/Navigeringsbar';

function App() {
  return (
    <div className="App">
      <Navigeringsbar/>
      <Registrering />
    </div>
  );
}

export default App;
