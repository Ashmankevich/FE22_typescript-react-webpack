import React from 'react';
import './App.css';
import { FirstPage } from './pages/first-page/FirstPage';
import { LoginConfirmation } from './pages/loginConfirmation-page/LoginConfirmation';
import { RegistrationConfirmation } from './pages/registrationConfirmation-page/RegistrationConfirmation';
import { SelectedPostPage } from './pages/selected-post-page/SelectedPostPage';
import { AllPostPage } from './pages/all-posts-page/AllPostPage';
import { InformationPage } from './pages/information-page/InformationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPages } from './types';
import { AppContext } from './AppContext';
import { ActivatePage } from './pages/activate-page/ActivatePage';
import { RegistrationForm } from './pages/registration-page/RegistrationForm';
import { LoginForm } from './pages/login-page/LoginForm';
import { PostPage } from './pages/post-page/PostPage';
import { AddPostPage } from './pages/add-post-page/AddPostPage';
import { MyPostsPage } from './pages/my-posts-page/MyPostsPage';

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
              path={AppPages.ADD_POST_PAGE}
              element={<AddPostPage></AddPostPage>}
            ></Route>
            <Route
              path={AppPages.INFORMATION}
              element={<InformationPage></InformationPage>}
            ></Route>
            <Route
              path={AppPages.LOGIN_FORM}
              element={<LoginForm></LoginForm>}
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
              path={AppPages.MY_POSTS_PAGE}
              element={<MyPostsPage></MyPostsPage>}
            ></Route>
            <Route
              path={`${AppPages.POST_PAGE}/:id`}
              element={<PostPage></PostPage>}
            ></Route>
            <Route
              path={AppPages.REGISTRATION_FORM}
              element={<RegistrationForm></RegistrationForm>}
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
