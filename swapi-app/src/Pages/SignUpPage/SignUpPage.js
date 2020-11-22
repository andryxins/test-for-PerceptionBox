import React from 'react';
import PropTypes from 'prop-types';
import FaceBookSignUp from '../../Components/FaceBookSignUp/FaceBookSignUp';
import LinkedInSignUp from '../../Components/LinkedInSignUp/LinkedInSignUp';
import Styles from './SignUpPage.module.css';

const SignUpPage = ({ setUser }) => (
  <div className={Styles.pageContainer}>
    <h1 className={Styles.pageTitle}>Sign up with</h1>
    <div className={Styles.signupContainer}>
      <FaceBookSignUp onLogin={setUser} />
      <span className={Styles.signupText}>or</span>
      <LinkedInSignUp onLogin={setUser} />
    </div>
  </div>
);

SignUpPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignUpPage;
