import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ul: {
    width: '100%',
    'justify-content': 'center',
    padding: '10px 0',
  },
});

const CustomPagination = ({ count, page, onChange }) => {
  const classes = useStyles();
  return (
    <Pagination
      classes={{
        ul: classes.ul,
      }}
      count={count}
      page={page}
      onChange={onChange}
      color="primary"
    />
  );
};

CustomPagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};

export default CustomPagination;
