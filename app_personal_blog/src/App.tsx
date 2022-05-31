import React from 'react';
import './App.css';
//import { FirstPage } from './pages/first-page/FirstPage';
//import { LoginPage } from './pages/login-page/LoginPage';
//import { LoginConfirmation } from './pages/loginConfirmation-page/LoginConfirmation';
//import { RegistrationPage } from './pages/registration-page/RegistrationPage';
//import { RegistrationConfirmation } from './pages/registrationConfirmation-page/RegistrationConfirmation';
//import { SelectedPostPage } from './pages/selected-post-page/SelectedPostPage';
//import { AllPostPage } from './pages/all-posts-page/AllPostPage';
//import { InformationPage } from './pages/information-page/InformationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPages } from './types';
import { LoginPage } from './pages/login-page/LoginPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={AppPages.LOGIN} element={LoginPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
