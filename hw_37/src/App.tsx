import React from 'react';
import './App.css';
import { Button } from './ui/button/Button';
import { Header } from './features/header/Header';
import { Description } from './ui/description/Description';
import { Login } from './ui/form/Login';
import { Registration } from './ui/form/Registration';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="main-page">
          <Header>
            Make your Blog{' '}
            <span>
              <a className="main-link" href="#">
                Online
              </a>
            </span>
          </Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            consequuntur inventore? Voluptates ea consequatur sunt unde ipsa.
            Quisquam doloremque maiores, natus minus deserunt ipsa sunt
            assumenda ad aspernatur eos quas cum repudiandae saepe possimus.
          </Description>
          <Button>Learn more</Button>
        </div>
        <div className="form">
          <div className="item">
            <Login></Login>
          </div>
          <div className="item">
            <Registration></Registration>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
