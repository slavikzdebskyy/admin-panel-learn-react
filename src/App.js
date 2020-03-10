import React, {Suspense, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store/store";

import Header from './layout/Header';
import AuthRoute from './components/Auth/Auth';

import {ROUTER} from './constants/constants';
import './App.scss';

const Register = React.lazy(() => import('./components/Register/Register'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Cars = React.lazy(() => import('./components/Cars/Cars'));
const Personal = React.lazy(() => import('./components/Personal/Personal'));
const SideBar = React.lazy(() => import('./layout/Side-bar'));
const NotFound = React.lazy(() => import('./components/404/404'));

const Loader = () => <div>Loading .....</div>;

function App() {
  const getIsLogged = JSON.parse(localStorage.getItem('user')) || false;
  const [loggedIn] = useState(getIsLogged);


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <div className="app-container">
          <div className="main-container">

            <Switch>
              <Redirect exact from="/" to={`/${ROUTER.cars}`}/>
              <Route path={`/${ROUTER.login}`}>
                <Suspense fallback={<Loader/>}>
                  <Login/>
                </Suspense>
              </Route>
              <Route path={`/${ROUTER.register}`}>
                <Suspense fallback={<Loader/>}>
                  <Register/>
                </Suspense>
              </Route>

              <AuthRoute path={`/${ROUTER.cars}`} log={loggedIn}>
                <Suspense fallback={<Loader/>}>
                  <SideBar/>
                  <Cars/>
                </Suspense>
              </AuthRoute>

              <AuthRoute path={`/${ROUTER.personal}`} log={loggedIn}>
                <Suspense fallback={<Loader/>}>
                  <SideBar/>
                  <Personal/>
                </Suspense>
              </AuthRoute>

              <Suspense fallback={<Loader/>}>
                <Route path="*" component={NotFound}/>
              </Suspense>
            </Switch>
          </div>
        </div>
        <footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
