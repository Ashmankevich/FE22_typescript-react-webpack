import React from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Header } from './components/header/Header';
import { Description } from './components/description/Description';
import { Form } from './components/form/Form';

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
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
