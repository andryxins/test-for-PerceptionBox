import React from 'react';
import PropTypes from 'prop-types';
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

PrivatRoute.propTypes = {
  isAuth: PropTypes.object,
  userHandler: PropTypes.func,
  component: PropTypes.any,
};

export default PrivatRoute;
