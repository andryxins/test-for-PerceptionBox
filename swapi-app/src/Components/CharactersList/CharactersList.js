import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import CustomPagination from '../CustomPagination/CustomPagination';
import deleteSpacesInUrl from '../../libs/deleteSpacesInUrl';
import Styles from './CharactersList.module.css';

const CharactersList = ({
  characters,
  isPagintationActive,
  quantityOnPage,
}) => {
  const [page, setPage] = useState(1);
  const [visibleCharacters, setVisibleCharacters] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (characters)
      return setVisibleCharacters(
        characters.slice(
          (page - 1) * quantityOnPage,
          (page - 1) * quantityOnPage + quantityOnPage
        )
      );
  }, [characters, page]);

  return characters ? (
    <Paper elevation={3}>
      <List component="ul">
        {visibleCharacters.map(({ name }) => (
          <li key={name}>
            <ListItem button>
              <Link
                className={Styles.link}
                to={`/character/${deleteSpacesInUrl(name)}`}
              >
                <ListItemText primary={name} />
              </Link>
            </ListItem>
          </li>
        ))}
      </List>
      {isPagintationActive && (
        <CustomPagination
          count={Math.ceil(characters.length / quantityOnPage)}
          page={page}
          onChange={handleChange}
        />
      )}
    </Paper>
  ) : null;
};

CharactersList.propTypes = {
  characters: PropTypes.array,
  filterQuery: PropTypes.string,
  isPagintationActive: PropTypes.bool,
  quantityOnPage: PropTypes.number,
};

export default CharactersList;
