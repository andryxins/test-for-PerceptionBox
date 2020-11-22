/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivatRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

export default PrivatRoute;
