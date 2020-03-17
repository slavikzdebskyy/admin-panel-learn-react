import React, {Suspense} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ROUTER} from '../../constants/constants';
import Spinner from 'react-bootstrap/Spinner';

const Register = React.lazy(() => import('../Register/Register'));
const Login = React.lazy(() => import('../Login/Login'));
const Cars = React.lazy(() => import('../Cars/Cars'));
const Personal = React.lazy(() => import('../Personal/Personal'));
const NotFound = React.lazy(() => import('../404/404'));
const SideBar = React.lazy(() => import('../../layout/Side-bar'));
const CarDetail = React.lazy(() => import('../Car-detail/Car-detail'));

const Routes = ({admin}) => {
  if (admin) {
    return (
      <Suspense fallback={<Spinner animation='border'/>}>
        <Redirect to={`/${ROUTER.cars}`}/>
        <Switch>
          <Route path={`/${ROUTER.cars}`} exact>
            <SideBar/>
            <Cars/>
          </Route>

          <Route path={`/${ROUTER.personal}`} exact>
            <SideBar/>
            <Personal/>
          </Route>

          <Route path={`/${ROUTER.car_detail}`}>
            <SideBar/>
            <CarDetail/>
          </Route>

          <Route path='*' component={NotFound}/>
        </Switch>
      </Suspense>
    )
  } else {
    return (
      <Suspense fallback={<Spinner animation='border'/>}>
        <Redirect to={`/${ROUTER.login}`}/>
        <Switch>
          <Route path={`/${ROUTER.login}`} exact>
            <Login/>
          </Route>

          <Route path={`/${ROUTER.register}`} exact>
            <Register/>
          </Route>

          <Route path='*' component={NotFound}/>
        </Switch>
      </Suspense>
    )
  }
};

const mapStoreToProps = ({admin}) => ({admin});

export default connect(mapStoreToProps)(Routes);
