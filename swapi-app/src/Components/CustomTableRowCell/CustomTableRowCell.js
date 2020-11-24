import React from 'react';
import PropTypes from 'prop-types';
import Styles from './CustomTableRowCell.module.css';

const CustomTableRowCell = ({ cellTitle, cellValue }) => (
  <div className={Styles.cell}>
    <span className={Styles.cellTitle}>{cellTitle}:</span>
    <span className={Styles.cellValue}>{cellValue}</span>
  </div>
);

CustomTableRowCell.propTypes = {
  cellTitle: PropTypes.string,
  cellValue: PropTypes.string,
};

export default CustomTableRowCell;
