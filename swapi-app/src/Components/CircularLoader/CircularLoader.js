import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Styles from './CircularLoader.module.css';

const CircularLoader = () => {
  return (
    <div className={Styles.loaderContainer}>
      <CircularProgress color="secondary" size={70} />
    </div>
  );
};

export default CircularLoader;
