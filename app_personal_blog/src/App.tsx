import React from 'react';
import './App.css';
import { FirstPage } from './pages/first-page/FirstPage';
import { LoginPage } from './pages/login-page/LoginPage';
import { LoginConfirmation } from './pages/loginConfirmation-page/LoginConfirmation';
import { RegistrationPage } from './pages/registration-page/RegistrationPage';
import { RegistrationConfirmation } from './pages/registrationConfirmation-page/RegistrationConfirmation';
import { SelectedPostPage } from './pages/selected-post-page/SelectedPostPage';
import { AllPostPage } from './pages/all-posts-page/AllPostPage';
import { InformationPage } from './pages/information-page/InformationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPages } from './types';
import { AppContext } from './AppContext';
import { ActivatePage } from './pages/activate-page/ActivatePage';

function App() {
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="app" ref={appRef}>
      <AppContext.Provider value={appRef}>
        <BrowserRouter>
          <Routes>
            <Route
              path={`${AppPages.ACTIVATE}/:uid/:token`}
              element={<ActivatePage></ActivatePage>}
            ></Route>
            <Route
              path={AppPages.ALL_POST}
              element={<AllPostPage></AllPostPage>}
            ></Route>
            <Route
              path={AppPages.INFORMATION}
              element={<InformationPage></InformationPage>}
            ></Route>
            <Route
              path={AppPages.LOGIN}
              element={<LoginPage></LoginPage>}
            ></Route>
            <Route
              path={AppPages.LOGIN_CONFIRMATION}
              element={<LoginConfirmation></LoginConfirmation>}
            ></Route>
            <Route
              path={AppPages.MAIN}
              element={<FirstPage></FirstPage>}
            ></Route>
            <Route
              path={AppPages.REGISTRATION}
              element={<RegistrationPage></RegistrationPage>}
            ></Route>
            <Route
              path={AppPages.REGISTRATION_CONFIRMATION}
              element={<RegistrationConfirmation></RegistrationConfirmation>}
            ></Route>
            <Route
              path={AppPages.SELECTED_POST}
              element={<SelectedPostPage></SelectedPostPage>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
