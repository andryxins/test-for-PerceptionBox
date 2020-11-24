/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivatRoute = ({
  isAuth,
  userHandler,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} user={isAuth} userHandler={userHandler} />
      ) : (
        <Redirect to="/signup" />
      )
    }
  />
);

export default PrivatRoute;
