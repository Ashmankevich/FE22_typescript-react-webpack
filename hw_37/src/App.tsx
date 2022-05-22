import React from 'react';
import './App.css';
import { Button } from './ui/button/Button';
import { Header } from './features/header/Header';
import { Description } from './ui/description/Description';
import { Login } from './ui/form/Login';
import { Registration } from './ui/form/Registration';
import { WelcomeTemplate } from './templates/welcome/WelomeTemplate';
import { ContentMainPage } from './pages/content-main-page/ContentMainPage';

function App() {
  return (
    <div className="app">
      <nav>
        <div className="burger-btn">
          <span></span>
        </div>
      </nav>
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
      </div>
    </div>
  );
}

export default App;
