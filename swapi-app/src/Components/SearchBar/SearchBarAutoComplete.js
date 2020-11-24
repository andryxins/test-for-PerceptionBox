import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBarAutoComplete = ({ characters, filterQuery, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  return characters ? (
    <Autocomplete
      value={filterQuery}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={characters.map((item) => item.name)}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your hero ..."
          variant="outlined"
        />
      )}
    />
  ) : null;
};

SearchBarAutoComplete.propTypes = {
  characters: PropTypes.array,
  filterQuery: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBarAutoComplete;
