import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

const AuthRoute = ({children, log, admin, ...rest}) => { console.log('admin Auth => ', admin)
  return (
    <Route
      {...rest}
      render={() =>
        !!admin ? (
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
}


const mapStoreToProps = ({ admin }) => ({ admin });

export default connect(mapStoreToProps)(AuthRoute);
