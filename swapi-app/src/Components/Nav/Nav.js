import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Styles from './Nav.module.css';

const Nav = () => (
  <div className={Styles.navContainer}>
    <Button variant="contained" color="primary">
      <NavLink
        className={Styles.btn}
        activeClassName={Styles.disabledBtn}
        exact
        to="/"
      >
        Home
      </NavLink>
    </Button>
    <Button variant="contained" color="primary">
      <NavLink
        className={Styles.btn}
        activeClassName={Styles.disabledBtn}
        to="/favorite"
      >
        Go to favorite
      </NavLink>
    </Button>
  </div>
);

export default Nav;
