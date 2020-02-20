import React from "react";
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = ({children, log, ...rest}) => (
  <Route
    {...rest}
    render={() =>
      log ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

export default AuthRoute;
