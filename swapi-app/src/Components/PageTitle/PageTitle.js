import React from 'react';
import PropTypes from 'prop-types';
import Styles from './PageTitle.module.css';

const PageTitle = ({ value }) => <h1 className={Styles.title}>{value}</h1>;

PageTitle.propTypes = {
  value: PropTypes.string,
};

export default PageTitle;
