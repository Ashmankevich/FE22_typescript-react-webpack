import React from 'react';
import './App.css';
//import { FirstPage } from './pages/first-page/FirstPage';
//import { LoginPage } from './pages/login-page/LoginPage';
//import { LoginConfirmation } from './pages/loginConfirmation-page/LoginConfirmation';
//import { RegistrationPage } from './pages/registration-page/RegistrationPage';
//import { RegistrationConfirmation } from './pages/registrationConfirmation-page/RegistrationConfirmation';
import { SelectedPostPage } from './pages/selected-post-page/SelectedPostPage';

function App() {
  return (
    <div className="app">
      <SelectedPostPage></SelectedPostPage>
    </div>
  );
}

export default App;
