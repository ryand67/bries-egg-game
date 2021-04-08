import React, { useState } from 'react';

import Login from './components/Login';
import Game from './components/Game';

import './App.css';

function App() {

  const [user, setUser] = useState('');
  const [turn, setTurn] = useState('Player1');

  return (
    <div className="App">
      {user ? <Game user={user} turn={turn} setTurn={setTurn} /> : <Login passUser={setUser} />}
    </div>
  );
}

export default App;
