import React from "react";
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ children, log, ...rest }) => {
  // const log = false;
  return (
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
};

export default AuthRoute;
