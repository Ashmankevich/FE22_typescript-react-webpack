import React from 'react';
import './App.css';
import { Button } from './button/Button';
import { Header } from './header/Header';

function App() {
  return (
    <div className="app">
      <Header>Make your Blog Online</Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        consequuntur inventore? Voluptates ea consequatur sunt unde ipsa.
        Quisquam doloremque maiores, natus minus deserunt ipsa sunt assumenda ad
        aspernatur eos quas cum repudiandae saepe possimus.
      </p>
      <Button>Learn more</Button>
    </div>
  );
}

export default App;
