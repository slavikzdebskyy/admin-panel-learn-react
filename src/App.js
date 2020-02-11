import React, {Suspense, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './layout/Header';
// import Login from './components/Login/Login';
// import Cars from './components/Cars/Cars';
// import Personal from './components/Personal/Personal';
import Register from './components/Register/Register';
// import SideBar from './layout/Side-bar';
import AuthRoute from './components/Auth/Auth';
// import NotFound from './components/404/404';

import {ROUTER} from './constants/constants';
import './App.scss';

const Login = React.lazy(() => import('./components/Login/Login'));
const Cars = React.lazy(() => import('./components/Cars/Cars'));
const Personal = React.lazy(() => import('./components/Personal/Personal'));
const SideBar = React.lazy(() => import('./layout/Side-bar'));
const NotFound = React.lazy(() => import('./components/404/404'));

const Loader = () => <div>Loading .....</div>;

function App() {
  const getIsLogged = JSON.parse(localStorage.getItem('user')) || false;
  const [loggedIn, setLoggedIn] = useState(getIsLogged);

  const toggle = () => {
    JSON.stringify(localStorage.setItem('user', !loggedIn));
    setLoggedIn(!loggedIn);
  };

  return (
    <BrowserRouter>
      <Header func={toggle}/>
      <div className="app-container">
        <div className="main-container">

          <Switch>
            <Redirect exact from="/" to={`/${ROUTER.cars}`}/>
            <Suspense fallback={<Loader/>}>
              <Route path={`/${ROUTER.login}`} component={Login}/>
              <Route path={`/${ROUTER.register}`} component={Register}/>
            </Suspense>

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






        {/*{*/}
        {/*  loggedIn*/}
        {/*    ?*/}
        {/*    <div className="main-container">*/}
        {/*      <SideBar/>*/}
        {/*      <Redirect to={`/${ROUTER.cars}`}/>*/}
        {/*      <Switch>*/}
        {/*        <Route path={`/${ROUTER.cars}`} component={Cars}/>*/}
        {/*        <Route path={`/${ROUTER.personal}`} component={Personal}/>*/}
        {/*        <Route path="*" component={NotFound}/>*/}
        {/*      </Switch>*/}
        {/*    </div>*/}
        {/*    :*/}
        {/*    <div className="main-container">*/}
        {/*      <Redirect to={`/${ROUTER.login}`}/>*/}
        {/*      < Switch>*/}
        {/*        <Route path={`/${ROUTER.login}`} component={Login}/>*/}
        {/*        <Route path={`/${ROUTER.register}`} component={Register}/>*/}
        {/*        <Route path="*" component={NotFound}/>*/}
        {/*      </Switch>*/}
        {/*    </div>*/}
        {/*}*/}
      </div>
      <footer/>
    </BrowserRouter>
  );
}

export default App;
