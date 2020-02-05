import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from './layout/Header';
import Login from './components/Login/Login';
import Main from './layout/Main';

import { ROUTER } from './constants/constants';
import './App.scss';

function App() {
  const loggedIn = false;

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Switch >

        <Route exact path="/">
        { loggedIn 
          ? 
            <Redirect to={`/${ROUTER.main}`}/>
          :
            <Redirect to={`/${ROUTER.login}`}/> 
          }
        </Route>
          
        <Route path={`/${ROUTER.login}`} component={Login} />
        <Route path={`/${ROUTER.main}`} component={Main} />


          {/* <Route path={`/${ROUTER.login}`}>
            <Login />
          </Route> */}

          {/* <Route path={`/${ROUTER.main}`}>
            <Main />
          </Route> */}
        </Switch>
        
          <footer/>
      </div>  
    </BrowserRouter> 
  );
}

export default App;
