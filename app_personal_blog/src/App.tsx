import React from 'react';
import './App.css';
//import { FirstPage } from './pages/first-page/FirstPage';
//import { LoginPage } from './pages/login-page/LoginPage';
//import { LoginConfirmation } from './pages/loginConfirmation-page/LoginConfirmation';
//import { RegistrationPage } from './pages/registration-page/RegistrationPage';
import { RegistrationConfirmation } from './pages/registrationConfirmation-page/RegistrationConfirmation';

function App() {
  return (
    <div className="app">
      <RegistrationConfirmation></RegistrationConfirmation>
    </div>
  );
}

export default App;
