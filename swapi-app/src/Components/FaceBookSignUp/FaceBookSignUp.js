import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';

const FaceBookSignUp = ({ onLogin }) => {
  const signUpHandler = ({ name }) => {
    return onLogin({ name });
  };

  return (
    <div>
      <FacebookLogin
        appId="1104515379957868"
        fields="name,email"
        callback={signUpHandler}
        render={(renderProps) => (
          <IconButton onClick={renderProps.onClick}>
            <FacebookIcon style={{ fontSize: 120 }} color="primary" />
          </IconButton>
        )}
      />
    </div>
  );
};

FaceBookSignUp.propTypes = {
  onLogin: PropTypes.func,
};

export default FaceBookSignUp;
