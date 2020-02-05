import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";




import SideBar from './Side-bar';
import Cars from '../components/Cars/Cars';
import Personal from '../components/Personal/Personal';

import { ROUTER } from '../constants/constants';

import './layout.scss';

const Main = () => { 
    return (
      <div className="main-container">
        <SideBar />
        <Switch >
          <Route exact path={`/${ROUTER.main}`}>
            <Redirect to={`/${ROUTER.main}/${ROUTER.cars}`}/> 
          </Route>
          <Route path={`/${ROUTER.main}/${ROUTER.cars}`} component={Cars} />
          <Route path={`/${ROUTER.main}/${ROUTER.personal}`}>
            <Personal />
          </Route>
          <Route path={`/${ROUTER.main}/${ROUTER.customers}`}>
            <div>
              <h3>
                This is 'DIV' tag element
              </h3>
            </div>
          </Route>
        </Switch>
    </div>
    )
}

export default Main;