import React from 'react';
import PropTypes from 'prop-types';
import LinkedIn from 'linkedin-login-for-react';
import { getAuthorizationCode, getUserInfo } from '../../api/linkedInApi';
import Styles from './LinkedInSignUp.module.css';

const LinkedInSignUp = ({ onLogin }) => {
  const signUpHandler = async (err, token, redirectUri) => {
    return getAuthorizationCode(token, redirectUri)
      .then(({ access_token }) => getUserInfo(access_token))
      .then(({ data }) => ({
        name: `${data.localizedFirstName} ${data.localizedLastName}`,
      }))
      .then((user) => onLogin(user))
      .catch((e) => console.log(e));
  };

  return (
    <div className={Styles.container}>
      <LinkedIn
        clientId="77qg8cay7ed911"
        callback={signUpHandler}
        scope={['r_liteprofile', 'r_emailaddress']}
        className={Styles.linkedInBtn}
      />
    </div>
  );
};

LinkedInSignUp.propTypes = {
  onLogin: PropTypes.func,
};

export default LinkedInSignUp;
