import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './layout/Header';
import Login from './components/Login/Login';
import Cars from './components/Cars/Cars';
import Personal from './components/Personal/Personal';
import Register from './components/Register/Register';
import SideBar from './layout/Side-bar';
// import AuthRoute from './components/Auth/Auth';

import {ROUTER} from './constants/constants';
import './App.scss';
import NotFound from "./components/404/404";

function App() {
  const getIsLogged = JSON.parse(localStorage.getItem('user')) || false;
  const [loggedIn, setLoggedIn] = useState(getIsLogged);

  return (
    <BrowserRouter>
      <Header func={setLoggedIn} loggedIn={loggedIn}/>
      <div className="app-container">
        <Redirect to={`/${ROUTER.cars}`}/>
        {/*<Switch>*/}
        {/*  */}
        {/*  <AuthRoute>*/}
        {/*    */}
        {/*  </AuthRoute>*/}
        {/*</Switch>*/}





        {
          loggedIn
            ?
            <div className="main-container">
              <SideBar/>
              <Redirect to={`/${ROUTER.cars}`}/>
              <Switch>
                <Route path={`/${ROUTER.cars}`} component={Cars}/>
                <Route path={`/${ROUTER.personal}`} component={Personal}/>
                <Route path="*" component={NotFound}/>
              </Switch>
            </div>
            :
            <div className="main-container">
              <Redirect to={`/${ROUTER.login}`}/>
              < Switch>
                <Route path={`/${ROUTER.login}`} component={Login}/>
                <Route path={`/${ROUTER.register}`} component={Register}/>
                <Route path="*" component={NotFound}/>
              </Switch>
            </div>
        }
      </div>
      <footer/>
    </BrowserRouter>
  );
}

export default App;
