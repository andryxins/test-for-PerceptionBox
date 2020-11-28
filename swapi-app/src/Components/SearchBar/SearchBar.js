import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <div className={Styles.container}>
    <TextField
      id="outlined-search"
      label="Search your favourite hero ..."
      type="search"
      variant="outlined"
      fullWidth
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
