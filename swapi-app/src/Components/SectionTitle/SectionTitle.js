import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SectionTitle.module.css';

const SectionTitle = ({ value }) => <h2 className={Styles.title}>{value}</h2>;

SectionTitle.propTypes = {
  value: PropTypes.string,
};

export default SectionTitle;
